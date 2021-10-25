import graphql from "babel-plugin-relay/macro";
import { Suspense } from "react";
import {
  loadQuery, RelayEnvironmentProvider, usePreloadedQuery
} from "react-relay/hooks";
import "./App.css";
import RelayEnvironment from "./relay/RelayEnvironment";
import FrontEndSkillsList from './components/FrontEndSkillsList'

const BackEndSkillsQuery = graphql`
  query AppBackEndSkillsQuery {
    backEnd {
      id
      name
      skills {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;

const backEndPreloadedQuery = loadQuery(RelayEnvironment, BackEndSkillsQuery);

function App({ backEndPreloadedQuery }) {

  const backEndQuery = usePreloadedQuery(BackEndSkillsQuery, backEndPreloadedQuery);
  const backEndSkills = backEndQuery.backEnd.skills.edges;

  return (
    <div className="App">
      <header>
        <h1>Knowledge base</h1>
      </header>

      <div className="skills-wrapper">
        <FrontEndSkillsList />

        <div className="backend">
          <h2>{backEndQuery.backEnd.name}</h2>
          <ul className="skills">
            {backEndSkills.map((skill) => (
              <li key={skill.node.id}>{skill.node.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback='Loading...'>
        <App backEndPreloadedQuery={backEndPreloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  )
}

export default AppRoot;
