/* eslint-disable react/prop-types */

function SkillsList({name, skills}) {
  return (
    <div className="frontend">
      <h2>{name}</h2>
      <ul className="skills">
        {skills.map(skill => (
          <li key={skill.node.id}>{skill.node.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsList;
