import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {ImUser} from 'react-icons/im'
import {FaFolderOpen} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {useState} from 'react'




const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  
  return (
    <nav>
      <a href='/home' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><ImUser/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaFolderOpen/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdEmail/></a>
    </nav>
  )
}

export default Nav