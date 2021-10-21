import { useEffect } from "react";
import "./App.css";
import mockImage from "./assets/mock.png";
import fetchGraphQL from "./relay/fetchGraphQL";

function App() {
  useEffect(() => {
    fetchGraphQL(`#graphql
      query {
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
    `)
      .then((result) => {
        console.log(result);
      });
  }, [])

  return (
    <div className="App">
      <div className="wip">
        <img src={mockImage} alt="mock" className="mock-image" />
        <span>
          <label htmlFor="two-skills">
            <input type="checkbox" id="two-skills" name="two-skills" />
            See two lists of skills
          </label>

          <label htmlFor="new-skill">
            <input type="checkbox" id="new-skill" name="new-skill" />
            Can add new skills
          </label>

          <label htmlFor="modal-dialog">
            <input type="checkbox" id="modal-dialog" name="modal-dialog" />
            New skill displayed in modal dialog
          </label>
        </span>
      </div>

      <header>Knowledge base</header>

      <div style={{ display: 'flex' }}>
        <div>
          Frontend
          <ul>
            <li>js</li>
            <li>html</li>
            <li>css</li>
          </ul>
        </div>
        <div>
          Backend
          <ul>
            <li>node.js</li>
            <li>hack</li>
            <li>rust</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
