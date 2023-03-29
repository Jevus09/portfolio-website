import React from 'react'
import './about.css'
import about from '../../assets/about.jpg'


const About = () => {
  return (
    <section id='about' >
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={about} alt='me'></img>
          </div>
        </div>
        <div className='about_content'>
          <p>
          I am a self-taught software developer, I have taken the initiative to learn the ins and outs of programming on my own. I have spent countless hours teaching myself new programming languages and technologies, building projects, and solving coding challenges. My dedication and drive to succeed in the tech industry demonstrate a strong work ethic and a passion for software development.<br/>

          Despite not having a formal education in computer science, I have honed my skills and gained practical experience through my self-directed learning approach. My ability to think critically and creatively has allowed me to tackle complex coding problems with confidence, and my passion for software development drives me to continuously improve my skills.<br/>

          I am excited to showcase my work and skills through my portfolio website, and I am eager to take on new challenges and projects. As I continue to grow and develop my skills, I aim to become a highly skilled and sought-after software developer in the industry.
            </p>
            <a href="mailto:jevus09@gmail.com" rel="noopener noreferrer" target="_blank" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
    

  )
}

export default About