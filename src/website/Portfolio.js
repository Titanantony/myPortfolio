import React, { useRef, useEffect } from 'react';
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

  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-subheading');
          } else {
            entry.target.classList.remove('animate-subheading');
          }
        });
      },
      { threshold: 0.5 }
    );

    const projectsElement = projectsRef.current;
    const skillsElement = skillsRef.current;
    const educationElement = educationRef.current;

    if (projectsElement) observer.observe(projectsElement);
    if (skillsElement) observer.observe(skillsElement);
    if (educationElement) observer.observe(educationElement);

    return () => {
      if (projectsElement) observer.unobserve(projectsElement);
      if (skillsElement) observer.unobserve(skillsElement);
      if (educationElement) observer.unobserve(educationElement);
    };
  }, []);

  return (
    <div className='portfolio'>
      <section className="main-content">
        <Left>
          <div className="text-content animate-content">
            <h2 className="animate-item">Hello 👋 am</h2>
            <h1 className="name animate-item">Antony</h1>
            <h2 className="title animate-item">Junior Software engineer and AI engineer</h2>
            <p className="animate-item">
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
            <p className="animate-item">
              My primary goal is to secure a remote job where I can contribute
              to innovative projects and collaborate with a dynamic team. I am
              enthusiastic about leveraging my skills in problem-solving and my
              hands-on experience to deliver high-quality software solutions. I
              look forward to the opportunity to make a meaningful impact in the
              tech industry.
            </p>
            <a
              href="https://docs.google.com/uc?export=download&id=17uNQeulAcXFhWGkGEyjigQsF_WFFB5O_"
              download
              className="animate-item"
            >
              <button className="download-btn">Download CV</button>
            </a>
            <div className="animate-item">
              <SocialLinks />
            </div>
          </div>
        </Left>
        <Right>
          <div className="image-wrapper animate-image">
            <div className="image-content">
              <img src={profileImage} alt="Antony Kinuthia" className="floating" />
            </div>
          </div>
        </Right>
      </section>

      <SubHeading className='title' id='projects' ref={projectsRef}>
        My Projects 
      </SubHeading>
      <ProjectsGrid />
      <SubHeading className='title' id='skills' ref={skillsRef}>
        Skills 
      </SubHeading>
      <Skills />
      <SubHeading className='title' id='education' ref={educationRef}>
        Qualifications 
      </SubHeading>
      <Education />
      <WavyBackground />
      <MyFotter id='contact'>
        <Footer />
      </MyFotter>
      <style>
        {`
          .animate-subheading {
            opacity: 0;
            animation: fadeInUp 0.6s ease-out forwards;
          }

          .animate-subheading span {
            display: inline-block;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.3s ease-out forwards;
          }

          .animate-subheading span:nth-child(1) { animation-delay: 0.1s; }
          .animate-subheading span:nth-child(2) { animation-delay: 0.2s; }
          .animate-subheading span:nth-child(3) { animation-delay: 0.3s; }
          .animate-subheading span:nth-child(4) { animation-delay: 0.4s; }
          .animate-subheading span:nth-child(5) { animation-delay: 0.5s; }
          .animate-subheading span:nth-child(6) { animation-delay: 0.6s; }
          .animate-subheading span:nth-child(7) { animation-delay: 0.7s; }
          .animate-subheading span:nth-child(8) { animation-delay: 0.8s; }
          .animate-subheading span:nth-child(9) { animation-delay: 0.9s; }
          .animate-subheading span:nth-child(10) { animation-delay: 1s; }
          .animate-subheading span:nth-child(11) { animation-delay: 1.1s; }
          .animate-subheading span:nth-child(12) { animation-delay: 1.2s; }
          .animate-subheading span:nth-child(13) { animation-delay: 1.3s; }
          .animate-subheading span:nth-child(14) { animation-delay: 1.4s; }
          .animate-subheading span:nth-child(15) { animation-delay: 1.5s; }
          .animate-subheading span:nth-child(16) { animation-delay: 1.6s; }
          .animate-subheading span:nth-child(17) { animation-delay: 1.7s; }


          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>

    
  )
}
const MyFotter = styled.footer`
  background-color: #03282e;
`

const Left = styled.div`
  @media (min-width: 768px) {
    width: 50%;
  }
`
const Right = styled.div`
  @media (min-width: 768px) {
    width: 30%;
    height: 50%;
  }
`

const SubHeading = React.forwardRef((props, ref) => (
  <StyledSubHeading className={`${props.className}`} ref={ref}>
    {props.children.split('').map((char, index) => (
      <span key={index}>{char}</span>
    ))}
  </StyledSubHeading>
));

const StyledSubHeading = styled.div`
  text-align: left;
  margin-bottom: 7px;
  color: #00e0d0;
`;
export default Portfolio
