import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container_contact'>
        <p>Thank you for visiting my portfolio! If you are interested in discussing freelance work or a software developer position, I am open to opportunities and would love to hear from you. You can reach out to me by clicking below, or by connecting with me on LinkedIn.  I look forward to hearing from you!</p>
        <div className='contact_buttons'>
          <a className='btn btn-primary' href="mailto:me@calderonjesus.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
          <a className='btn btn-primary' href='https://www.linkedin.com/in/jesus-calderon-8985a41a1/' rel="noopener noreferrer" target="_blank">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

export default Contact