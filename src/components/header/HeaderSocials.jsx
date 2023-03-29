import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href='https://www.linkedin.com/in/jesus-calderon-8985a41a1/' target="_blank" rel="noreferrer"><SiLinkedin/></a>
        <a href='https://github.com/Jevus09' target="_blank" rel="noreferrer"><SiGithub/></a>
    </div>
  )
}

export default HeaderSocials