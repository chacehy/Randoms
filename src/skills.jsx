function Skills({ skills }) {
    let skillName = skills.map(skill => (
        <li className="list-item" key={skill.id}>
            {skill.name}: {`${skill.exp} of experience`}
        </li>
    ));
    return <ol>{skillName}</ol>;
}

export default Skills;