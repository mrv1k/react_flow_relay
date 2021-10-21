import "./App.css";
import mockImage from './assets/mock.png'

function App() {
  return (
    <div className="App">
      <div class="wip">
        <img src={mockImage} alt="mock" className="mock-image" />
        <span>
          <label for="two-skills">
            <input type="checkbox" id="two-skills" name="two-skills" />
            See two lists of skills
          </label>

          <label for="new-skill">
            <input type="checkbox" id="new-skill" name="new-skill" />
            Can add new skills
          </label>

          <label for="modal-dialog">
            <input type="checkbox" id="modal-dialog" name="modal-dialog" />
            New skill displayed in modal dialog
          </label>
        </span>
      </div>


      <header>Knowledge base</header>
    </div>
  );
}

export default App;
