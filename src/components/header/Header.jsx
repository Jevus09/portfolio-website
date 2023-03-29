import React from 'react'
import './header.css'
import CTA from './cta'
import ME from '../../assets/ME.png'
import './HeaderSocials'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className=" container header_container">
        <h5>Hello I'm</h5>
        <h1>Jesus Calderon</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='me' />
        </div>
        <div className='header_email'>
          <a href="mailto:jevus09@gmail.com" rel="noopener noreferrer" target="_blank">Jevus09@gmail.com</a>
        </div>
      </div>
    </header>
  )
}

export default Header