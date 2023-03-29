import React from 'react'
import './contact.css'
import contact from '../../assets/contact.jpg'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container_contact'>
        <img src={contact} alt='contact'></img>
        <p>Thank you for visiting my portfolio website! If you are interested in discussing freelance work or a software developer position, I am open to opportunities and would love to hear from you. You can reach out to me by clicking "say Hello" bellow, or by connecting with me on LinkedIn. Please feel free to reach out if you have any questions or would like to discuss a potential project. I look forward to hearing from you!</p>
        <div className='contact_buttons'>
          <a className='btn btn-primary' href="mailto:jevus09@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
          <a className='btn btn-primary' href='https://www.linkedin.com/in/jesus-calderon-8985a41a1/' rel="noopener noreferrer" target="_blank">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

export default Contact