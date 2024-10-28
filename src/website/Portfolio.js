import './Portfolio.css'
import styled from 'styled-components'
import ProjectsGrid from './components/ProjectsGrid'
import Skills from './components/Skills'
import Education from './components/Education'
import WavyBackground from './components/WavyBackground'
import profileImage from '../assets/profile_pic.jpeg'
import Footer from '../SharedComponents/Footer'
import SocialLinks from '../SharedComponents/SocialLinks'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className='main-content'>
        <Left>
          {' '}
          <div className='text-content'>
            <h2>Hello 👋 am </h2>
            <h1 className='name'>Antony</h1>
            <h2 className='title'>Junior Software engineer and AI engineer</h2>
            <p>
              {' '}
              I am a dedicated computer science student with a strong passion
              for software development and emerging technologies. With a keen
              interest in roles such as Flutter Developer, React Developer, AI
              Developer, Software Engineer, Mobile Application Developer, and
              Junior Software Developer, I am eager to apply my academic
              knowledge and problem-solving skills to real-world challenges.
              Through self-initiated projects, I have gained practical
              experience in these areas and am excited to continue learning and
              growing in a professional setting.
            </p>
            <p>
              My primary goal is to secure a remote job where I can contribute
              to innovative projects and collaborate with a dynamic team. I am
              enthusiastic about leveraging my skills in problem-solving and my
              hands-on experience to deliver high-quality software solutions. I
              look forward to the opportunity to make a meaningful impact in the
              tech industry.
            </p>{' '}
            <a
              href='https://docs.google.com/uc?export=download&id=17uNQeulAcXFhWGkGEyjigQsF_WFFB5O_'
              download
            >
              <button className='download-btn'>Download CV</button>
            </a>
            <SocialLinks />
          </div>
        </Left>
        <Right>
          <div className='image-content'>
            <img src={profileImage} alt='Antony Kinuthia' />
          </div>
        </Right>
      </div>
      <SubHeading className='title' id='projects'>
        My Projects --
      </SubHeading>
      <ProjectsGrid />
      <SubHeading className='title' id='skills'>
        Skills --
      </SubHeading>
      <Skills />
      <SubHeading className='title' id='education'>
        My Educational background --
      </SubHeading>
      <Education />
      <WavyBackground />
      <MyFotter id='contact'>
        <Footer />
      </MyFotter>
    </div>
  )
}
const MyFotter = styled.footer`
  background: #03282e;
`
const SubHeading = styled.div`
  text-align: left;
  margin-bottom: 7px;
`
const Left = styled.div`

  @media (min-width: 768px) {
    width: 50%;
  }
`
const Right = styled.div`
  @media (min-width: 768px) {
    
    width: 40%;
    height: 50%;
  }
`



export default Portfolio
