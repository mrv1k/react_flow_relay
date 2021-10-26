/* eslint-disable react/prop-types */

function SkillsList({name, skills}) {
  return (
    <div className="skills" onClick={() => console.log('TODO: Popup a modal')}>
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
