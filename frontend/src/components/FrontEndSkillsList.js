import graphql from 'babel-plugin-relay/macro';
import {loadQuery, usePreloadedQuery} from 'react-relay/hooks';
import RelayEnvironment from '../relay/RelayEnvironment';
import AddNewSkill from './AddNewSkill';
import SkillsList from './SkillsList';
import Modal from './Modal';
import {useState} from 'react';

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

  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <SkillsList
        name={frontEnd.name}
        skills={frontEnd.skills.edges}
        openModal={openModal}
      />
      {showModal
        && (
          <Modal title={`Add to ${frontEnd.name}`} closeModal={closeModal}>
            <AddNewSkill areaId={frontEnd.id} closeModal={closeModal} />
          </Modal>
        )}
    </>
  );
}

export default FrontEndSkillsList;
