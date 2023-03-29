import React from 'react'
import './footer.css'
import LOGO from '../../assets/logo.PNG'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'><img src={LOGO} alt='logo'></img></a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
        </ul>

      <div className="footer_copyright">
        <small> Copyright &copy; 2022 Jesus Calderon. All rights reserved</small>
      </div>



    </footer>
  )
}

export default Footer