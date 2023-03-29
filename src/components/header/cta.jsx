import React from 'react'
import CV from '../../assets/resume.txt'

const cta = () => {
  return (
    <div className="cta">
        <a href={CV} download className="btn">Download Resume</a>
        <a href="#contact" className="btn btn-primary">Get in Touch</a>
    </div>
  )
}

export default cta