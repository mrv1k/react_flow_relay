import mockImage from '../assets/mock.png';

const DevProgress = () => (
  <div className="wip">
    <img src={mockImage} alt="mock" className="mock-image" />
    <span>
      <label htmlFor="two-skills">
        <input type="checkbox" id="two-skills" name="two-skills" checked readOnly />
        See two lists of skills
      </label>

      <label htmlFor="new-skill">
        <input type="checkbox" id="new-skill" name="new-skill" checked readOnly />
        Can add new skills
      </label>

      <label htmlFor="modal-dialog">
        <input type="checkbox" id="modal-dialog" name="modal-dialog" checked readOnly />
        New skill displayed in modal dialog
      </label>

      <label>
        <input type="checkbox" name="flow-types" />
        Add types using Flow
      </label>
    </span>
  </div>
);

export default DevProgress;
