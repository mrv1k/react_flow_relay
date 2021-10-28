// @flow

import {StrictMode, Suspense} from 'react';
import ReactDOM from 'react-dom';
import {RelayEnvironmentProvider} from 'react-relay/hooks';
import App from './App';
import DevProgress from './components/DevProgress';
import './index.css';
import MyAppEnvironment from './relay/RelayEnvironment';
import reportWebVitals from './reportWebVitals';

const Root = () => (
  <StrictMode>
    {process.env.NODE_ENV && <DevProgress />}

    <RelayEnvironmentProvider environment={MyAppEnvironment}>
      <Suspense fallback="Loading...">
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  </StrictMode>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
