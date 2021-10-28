// @flow

import {Environment, Network, RecordSource, Store} from 'relay-runtime';
import fetchGraphQL from './fetchGraphQL';
import type {FetchFunction} from 'relay-runtime/network/RelayNetworkTypes';

// Pass Relay "params" and (optional) variables to helper function
const fetchRelay: FetchFunction
  = async (requestParams, variables) => {
    if (requestParams?.text) {
      return fetchGraphQL(requestParams.text, variables);
    }

    return Promise.reject(Error('Request params are required but missing.'));
  };

// Export a singleton instance of Relay Environment configured with our network function.
const environment: Environment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});

export default environment;
