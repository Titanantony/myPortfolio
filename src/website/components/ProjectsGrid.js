// ProjectsGrid.js
import React from 'react'
import './ProjectsGrid.css'

const ProjectsGrid = () => {
  return (
    <div className='projects-grid'>
      <div className='grid-item'>
        <div>
          <h2>Hidden Gems</h2>
          <p>
            A tourism app designed to promote and highlight lesser-known
            attractions in Kenya, similar to apps like "Visit Dubai."
          </p>
          <ul>
            <li>Backend: Firebase</li>
            <li>Frontend: Flutter</li>
          </ul>
          <p>Status: The project is still in progress.</p>
        </div>
        <div>
          <a
            href='https://github.com/Titanantony/hidden_gems'
            className='links'
            target='_blank'
            rel='noreferrer'
          >
            View Project
          </a>
          <a
            href='https://github.com/Titanantony?tab=repositories'
            className='links'
            target='_blank'
            rel='noreferrer'
          >
            View my other projects
          </a>
        </div>

        <div className='icons'>{/* Add icons here */}</div>
      </div>

      <div className='grid-item'>
        <h2>Handswritten AI</h2>
        <p>
          Developed an AI model to understand the basics of AI and machine
          learning.
        </p>
        <ul>
          <li>Model Type: Neural network</li>
          <li>
            Task: Image recognition, specifically recognizing handwritten digits
          </li>
          <li>Framework: TensorFlow</li>
        </ul>
        <p>
          Outcome: Gained foundational knowledge of AI and machine learning by
          building a neural network model that successfully recognizes
          handwritten digits.
        </p>
        <a
          href='https://github.com/Titanantony/handwritten_digits_ai'
          className='links'
          target='_blank'
          rel='noreferrer'
        >
          View Project
        </a>
        <a
          href='https://github.com/Titanantony?tab=repositories'
          className='links'
          target='_blank'
          rel='noreferrer'
        >
          View my other projects
        </a>
        <div className='icons'>{/* Add icons here */}</div>
      </div>

      <div className='grid-item'>
        <h2>Offline AI</h2>
        <p>
          Created an AI application using pre-downloaded models with the Ollama
          API, allowing users to ask general knowledge questions to the model.
        </p>
        <ul>
          <li>Technology: Flutter for app development</li>
          <li>Models Used: Mistral, LLaMA, Mixtral, LLava</li>
        </ul>
        <p>
          Functionality: The app works offline by using pre-downloaded AI
          models.
        </p>
        <a
          href='https://github.com/Titanantony/offline_ai'
          className='links'
          target='_blank'
          rel='noreferrer'
        >
          View Project
        </a>
        <a
          href='https://github.com/Titanantony?tab=repositories'
          className='links'
          target='_blank'
          rel='noreferrer'
        >
          View my other projects
        </a>
        <div className='icons'>{/* Add icons here */}</div>
      </div>
    </div>
  )
}

export default ProjectsGrid
