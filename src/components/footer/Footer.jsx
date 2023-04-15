import React from 'react'
import './footer.css'
import LOGO from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'><img src={LOGO} alt='logo'></img></a>
      <div className="footer_copyright">
        <small> Copyright &copy; 2022 Jesus Calderon. All rights reserved</small>
      </div>



    </footer>
  )
}

export default Footer