import graphql from 'babel-plugin-relay/macro';
import {loadQuery, usePreloadedQuery} from 'react-relay/hooks';
import RelayEnvironment from '../relay/RelayEnvironment';
import SkillsList from './SkillsList';

const gqlQuery = graphql`
  query FrontEndSkillsListQuery {
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

const preloadedQuery = loadQuery(RelayEnvironment, gqlQuery);

function FrontEndSkillsList() {
  const {frontEnd} = usePreloadedQuery(gqlQuery, preloadedQuery);

  return <SkillsList name={frontEnd.name} skills={frontEnd.skills.edges} />;
}

export default FrontEndSkillsList;
