import {React, useEffect, useState} from 'react'
import './header.css'
import CTA from './cta'
import Typewriter from 'typewriter-effect';
import './HeaderSocials'
import HeaderSocials from './HeaderSocials'
import Stack from '../stack/stack'

const Header = () => {

  const [showSecondTypewriter, setShowSecondTypewriter] = useState(false)
  const [showThirdTypewriter, setShowThirdTypewriter] = useState(false)

  useEffect(() =>{
    setTimeout(() => {
      setShowSecondTypewriter(true)
    }, 5400)
  }, [])


  useEffect(() =>{
    setTimeout(() => {
      setShowThirdTypewriter(true)
    }, 9600)
  }, [])

  return (
    <header>
      <div className=" container header_container">
        <CTA />
        <div className="type">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString(`Hello, World!`)
              .callFunction(() => {
              })
              .start();
          }} 
          options={
            {
              cursor: '',
            }}
          />
          {showSecondTypewriter && (<Typewriter
          onInit={(typewriter1) => {
            typewriter1.typeString(`My name is Jesus Calderon`)
              .callFunction(() => {
              })
              .pauseFor(1000)
              .callFunction(() => {
              })
              .start();
          }}
          options={
            {
              cursor: '',
            }}
          />)}
        {showThirdTypewriter && (<Typewriter
          onInit={(typewriter2) => {
            typewriter2.typeString('I build things for the web.')
              .callFunction(() => {
              })
              .pauseFor(1500)
              .deleteChars(12)
              .pauseFor(500)
              .typeString('with ReactJS')
              .pauseFor(1500)
              .deleteChars(7)
              .pauseFor(500)
              .typeString('Python')
              .pauseFor(1500)
              .deleteChars(6)
              .pauseFor(500)
              .typeString('CSS-3')
              .pauseFor(1500)
              .deleteChars(5)
              .pauseFor(500)
              .typeString('BootStrap')
              .pauseFor(1500)
              .deleteChars(9)
              .pauseFor(500)
              .typeString('HTML-5')
              .pauseFor(1500)
              .deleteChars(6)
              .pauseFor(500)
              .typeString('JavaScript')
              .callFunction(() => {
              })
              .start();
              
          }}
          options={
            {
              loop: false,
              autoStart: true,
              cursor: '',
            }
            
          }
          />)}
        </div>
        <HeaderSocials />
        <Stack className='stack'/>
        <div className='header_email'>
          <a href="mailto:me@calderonjesus.com" rel="noopener noreferrer" target="_blank">me@calderonjesus.com</a>
        </div>
      </div>
    </header>
  )
}

export default Header