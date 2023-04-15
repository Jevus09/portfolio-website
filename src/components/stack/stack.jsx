import React from 'react'
import './stack.css'
import rc from '../../assets/react.png'
import py from '../../assets/python.png'
import js from '../../assets/js.png'
import css from '../../assets/css.png'
import tw from '../../assets/tailwind.png'
import html from '../../assets/html.png'


const data = [
    {
      id: 1,
      image: rc,
    },
    {
      id: 2,
      image: py,
    },
    {
      id: 4,
      image: js,
    },
    
      {
      id: 6,
      image: css,
      },
      {
      id: 8,
      image: html,
      }    
  ]

  function stack() {
  return (
    <section id='about_stack'>
        <div id='tech_stack'>
        <h3>Tech Stack  |</h3>
              <div className="container stack_container">
                  <div className='stack_cards'>
                    {
                    data.map(({image}) => {
                    return (
                        <article key ='id' className='stack_icon'>
                        <img src={image} alt='title'></img>
                        </article>
                    )
                    })
                    }
                  </div>
              </div>
        </div>
    </section>
  )
}

export default stack