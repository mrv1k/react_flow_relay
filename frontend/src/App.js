import graphql from "babel-plugin-relay/macro";
import { Suspense } from "react";
import {
  loadQuery, RelayEnvironmentProvider, usePreloadedQuery
} from "react-relay/hooks";
import "./App.css";
import RelayEnvironment from "./relay/RelayEnvironment";

const FrontEndSkillsQuery = graphql`
  query AppFrontEndSkillsQuery {
    frontEnd {
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

const frontEndPreloadedQuery = loadQuery(RelayEnvironment, FrontEndSkillsQuery);
const backEndPreloadedQuery = loadQuery(RelayEnvironment, BackEndSkillsQuery);

function App({ frontEndPreloadedQuery, backEndPreloadedQuery }) {
  const frontEndQuery = usePreloadedQuery(FrontEndSkillsQuery, frontEndPreloadedQuery);
  const frontEndSkills = frontEndQuery.frontEnd.skills.edges;

  const backEndQuery = usePreloadedQuery(BackEndSkillsQuery, backEndPreloadedQuery);
  const backEndSkills = backEndQuery.backEnd.skills.edges;

  return (
    <div className="App">
      <header>
        <h1>Knowledge base</h1>
      </header>

      <div className="skills-wrapper">
        <div className="frontend">
          <h2>{frontEndQuery.frontEnd.name}</h2>
          <ul className="skills">
            {frontEndSkills.map((skill) => (
              <li key={skill.node.id}>{skill.node.name}</li>
            ))}
          </ul>
        </div>

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
        <App
          frontEndPreloadedQuery={frontEndPreloadedQuery}
          backEndPreloadedQuery={backEndPreloadedQuery}
        />
      </Suspense>
    </RelayEnvironmentProvider>
  )
}

export default AppRoot;
