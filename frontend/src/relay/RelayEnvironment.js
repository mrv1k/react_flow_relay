// @flow

import {
  Environment,
  Network,
  RecordSource,
  Store,
  type FetchFunction,
} from "relay-runtime";

const fetchFunction: FetchFunction = async (request, variables) => {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });

  return response.json();
};

// Export a singleton instance of Relay Environment configured with our network function.
const environment: Environment = new Environment({
  network: Network.create(fetchFunction),
  store: new Store(new RecordSource()),
});

export default environment;
