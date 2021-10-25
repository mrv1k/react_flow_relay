import graphql from "babel-plugin-relay/macro";
import {
  loadQuery, usePreloadedQuery
} from "react-relay/hooks";
import RelayEnvironment from "../relay/RelayEnvironment";
import SkillsList from './SkillsList';

const gqlQuery = graphql`
  query BackEndSkillsListQuery {
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

const preloadedQuery = loadQuery(RelayEnvironment, gqlQuery);

function BackEndSkillsList() {
  const { backEnd } = usePreloadedQuery(gqlQuery, preloadedQuery);

  return <SkillsList name={backEnd.name} skills={backEnd.skills.edges} />;
}

export default BackEndSkillsList;
