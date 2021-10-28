// @flow

import {Suspense, useEffect, useState} from 'react';
import {RelayEnvironmentProvider} from 'react-relay/hooks';
import AddNewSkill from './components/AddNewSkill';
import './App.css';
import BackEndSkillsList from './components/BackEndSkillsList';
import FrontEndSkillsList from './components/FrontEndSkillsList';
import Modal from './components/Modal';
import RelayEnvironment from './relay/RelayEnvironment';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalAreaId, setModalAreaId] = useState(null);
  const [modalTitle, setModalTitle] = useState(null);

  const openModal = (areaId, title) => {
    setModalAreaId(areaId);
    setModalTitle(title);
    setModalIsVisible(true);
  };

  const closeModal = () => setModalIsVisible(false);

  return (
    <div className="App">
      <header>
        <h1>Knowledge base</h1>
      </header>

      <div className="skills-wrapper">
        <FrontEndSkillsList openModal={openModal} />
        <BackEndSkillsList openModal={openModal} />
      </div>

      {modalIsVisible
        && (
          <Modal title={`Add to ${modalTitle}`} closeModal={closeModal}>
            <AddNewSkill areaId={modalAreaId} closeModal={closeModal} />
          </Modal>
        )}
    </div>
  );
}

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback="Loading...">
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
