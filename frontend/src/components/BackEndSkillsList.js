// @flow

import graphql from 'babel-plugin-relay/macro';
import type {Node} from 'react';
import {loadQuery, usePreloadedQuery} from 'react-relay/hooks';
import MyAppEnvironment from '../relay/RelayEnvironment';
import SkillsList from './SkillsList';
import type {OpenModalFn} from '../App';

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

const preloadedQuery = loadQuery(MyAppEnvironment, gqlQuery, {});

type Props = {
  openModal: OpenModalFn,
}

function BackEndSkillsList({openModal}: Props): Node {
  const {backEnd} = usePreloadedQuery(gqlQuery, preloadedQuery);

  return (
    <SkillsList
      name={backEnd.name}
      skills={backEnd.skills.edges}
      openModal={() => openModal(backEnd.id, backEnd.name)}
    />
  );
}

export default BackEndSkillsList;
