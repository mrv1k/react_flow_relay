// @flow

import type {Node} from 'react';

function SkillsList({name, skills, openModal}): Node {
  return (
    <div className="skills" onClick={openModal}>
      <h2>{name}</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill.node.id}>{skill.node.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsList;
