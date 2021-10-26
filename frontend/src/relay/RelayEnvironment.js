import {Environment, Network, RecordSource, Store} from 'relay-runtime';
import fetchGraphQL from './fetchGraphQL';

// Pass Relay "params" and (optional) variables to helper function
const fetchRelay = async (params, variables) => fetchGraphQL(params.text, variables);

// Export a singleton instance of Relay Environment configured with our network function.
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
