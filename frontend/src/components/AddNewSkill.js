import {useState} from 'react';
import graphql from 'babel-plugin-relay/macro';
import {useMutation} from 'react-relay/hooks';

const gqlMutation = graphql`
  mutation AddNewSkillMutation($skillName: String!, $areaId: ID!) {
    introduceSkill(input: { skillName: $skillName, areaId: $areaId }) {
      skill {
        name
      }
    }
  }
`;

function AddNewSkill() {
  const [skill, setSkill] = useState('test');
  const [commit, isInFlight] = useMutation(gqlMutation);

  const submit = e => {
    e.preventDefault();
    console.log('submit', skill);
    commit({
      variables: {
        skillName: skill,
        areaId: 1,
      },
      onCompleted(data) {
        console.log(data);
      },
    });
  };

  if (isInFlight) {
    return <div>Mutating...</div>;
  }

  return (
    <form onSubmit={submit}>
      <input
        style={{border: '1px solid gray', width: '80%'}}
        value={skill}
        onChange={e => setSkill(e.target.value)}
      />
      <button onClick={submit}>button</button>
    </form>
  );
}

export default AddNewSkill;
