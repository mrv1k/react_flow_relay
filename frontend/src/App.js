// @flow strict

import type {Node} from 'react';
import {useState} from 'react';
import './App.css';
import AddNewSkill from './components/AddNewSkill';
import BackEndSkillsList from './components/BackEndSkillsList';
import FrontEndSkillsList from './components/FrontEndSkillsList';
import Modal from './components/Modal';

export type OpenModalFn = (areaId: number, title: string) => void
// CloseModal is too simple to warrant a type

function App(): Node {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalAreaId, setModalAreaId] = useState(null);
  const [modalTitle, setModalTitle] = useState(null);

  const openModal: OpenModalFn = (areaId: number, title: string) => {
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

      {(modalIsVisible && modalTitle && modalAreaId) && (
        <Modal title={`Add to ${modalTitle}`} closeModal={closeModal}>
          <AddNewSkill areaId={modalAreaId} closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
}

export default App;
