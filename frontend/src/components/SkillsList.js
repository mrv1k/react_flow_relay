// @flow

import type { OpenModalFn } from "../App";
import type { Node } from "react";

type Props = {
  name: string,
  skills: any[],
  openModal: OpenModalFn,
};

function SkillsList({ name, skills, openModal }: Props): Node {
  return (
    <div className="skills" onClick={openModal}>
      <h2>{name}</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.node.id}>{skill.node.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsList;
