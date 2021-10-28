// @flow

import graphql from 'babel-plugin-relay/macro';
import {loadQuery, usePreloadedQuery} from 'react-relay/hooks';
import MyAppEnvironment from '../relay/RelayEnvironment';
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

const preloadedQuery = loadQuery(MyAppEnvironment, gqlQuery);

function FrontEndSkillsList({openModal}) {
  const {frontEnd} = usePreloadedQuery(gqlQuery, preloadedQuery);

  return (
    <SkillsList
      name={frontEnd.name}
      skills={frontEnd.skills.edges}
      openModal={() => openModal(frontEnd.id, frontEnd.name)}
    />
  );
}

export default FrontEndSkillsList;
