import React from 'react'
import './Skills.css' // Assuming you have corresponding CSS for styling

const skillsData = {
  coding: [
    { name: 'Flutter', stars: 4 },
    { name: 'React', stars: 4 },
    { name: 'Python', stars: 4 },
    { name: 'HTML/5', stars: 5 },
    { name: 'CSS/3 (+ SASS)', stars: 5 },
    { name: 'Bootstrap', stars: 4 },
    { name: 'Javascript / NodeJS', stars: 4 },
    { name: 'JSON / XML', stars: 5 },
    { name: 'C# / c', stars: 2 },
    { name: 'Visual Basic', stars: 2 },
    { name: 'Docker', stars: 2 },
  ],
  languages: [
    { name: 'English', stars: 5 },
    { name: 'Swahili', stars: 4 },
  ],
  tools: [
    { name: 'Windows / Linux', stars: 5 },
    { name: 'Github', stars: 5 },
    { name: 'Git', stars: 4 },
    { name: 'Ollama', stars: 5 },
    { name: 'Vs code', stars: 4 },
    { name: 'Sublime text', stars: 4 },
    { name: 'Figma', stars: 3 },
    { name: 'Draw.io', stars: 3 },
    { name: 'Firebase', stars: 5 },
    { name: 'Tensorflow', stars: 3 },
    { name: 'Numpy', stars: 3 },
    { name: 'Vs code', stars: 4 },
    { name: 'Modern Browsers (default: Chrome)', stars: 4 },
  ],
}

const SkillItem = ({ name, stars }) => {
  return (
    <div className='skill-item'>
      <span>{name}</span>
      <span className='stars'>
        {'★'.repeat(stars)}
        {'☆'.repeat(5 - stars)}
      </span>
    </div>
  )
}

const SkillCategory = ({ title, skills }) => {
  return (
    <div className='skill-category'>
      <h3>{title}</h3>
      {skills.map((skill, index) => (
        <SkillItem key={index} {...skill} />
      ))}
    </div>
  )
}

const Skills = () => {
  return (
    <div className='skills'>
      <SkillCategory title='Coding' skills={skillsData.coding} />
      <SkillCategory title='Languages' skills={skillsData.languages} />
      <SkillCategory title='Tools / Others' skills={skillsData.tools} />
    </div>
  )
}

export default Skills
