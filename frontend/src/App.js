import { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import "./App.css";
import FrontEndSkillsList from './components/FrontEndSkillsList';
import BackEndSkillsList from './components/BackEndSkillsList';
import RelayEnvironment from "./relay/RelayEnvironment";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Knowledge base</h1>
      </header>

      <div className="skills-wrapper">
        <FrontEndSkillsList />
        <BackEndSkillsList />
      </div>
    </div>
  );
}

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback='Loading...'>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  )
}

export default AppRoot;
