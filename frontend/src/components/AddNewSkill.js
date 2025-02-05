// @flow

import graphql from "babel-plugin-relay/macro";
import type { Node } from "react";
import { useState } from "react";
import { useMutation } from "react-relay/hooks";
import type { AddNewSkillMutation } from "./__generated__/AddNewSkillMutation.graphql.js";
// import AddNewSkillMutation from "./__generated__/AddNewSkillMutation.graphql";

const gqlMutation = graphql`
  mutation AddNewSkillMutation($skillName: String!, $areaId: ID!) {
    introduceSkill(input: { skillName: $skillName, areaId: $areaId }) {
      skill {
        name
      }
    }
  }
`;

type Props = {
  areaId: number,
  closeModal: () => void,
};

function AddNewSkill({ areaId, closeModal }: Props): Node {
  const [skill, setSkill] = useState("");
  const [commit, isInFlight] = useMutation<AddNewSkillMutation>(gqlMutation);

  const submit = (e) => {
    console.log("fired");
    e.preventDefault();

    commit({
      variables: {
        skillName: skill,
        areaId,
      },
      onCompleted(data) {
        // FIX: isInFlight flicker
        // TODO: update list
        console.log("committed", data);
        setSkill("");
        // closeModal();
      },
    });
  };

  if (isInFlight) {
    return <div>Persisting...</div>;
  }

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <button type="button" className="cancel" onClick={closeModal}>
        Cancel
      </button>
      <button type="button" className="add" onClick={submit}>
        Add
      </button>
    </form>
  );
}

export default AddNewSkill;
