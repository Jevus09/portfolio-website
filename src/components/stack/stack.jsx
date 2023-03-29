import React from 'react'
import './stack.css'
import rc from '../../assets/react.png'
import py from '../../assets/python.png'
import flask from '../../assets/flask.PNG'
import js from '../../assets/js.png'
import bs from '../../assets/bootstrap.png'
import css from '../../assets/css.png'
import tw from '../../assets/tailwind.png'
import html from '../../assets/html.png'


const data = [
    {
      id: 1,
      image: rc,
      title: 'ReactJS',
    },
    {
      id: 2,
      image: py,
      title: 'Python',
    },
    {
      id: 3,
      image: flask,
      title: 'Flask',
    },
    {
      id: 4,
      image: js,
      title: 'JavaScript',
    },
    {
      id: 5,
      image: bs,
      title: 'BootStrap',
      },
      {
      id: 6,
      image: css,
      title: 'CSS-3',
      },
      {
      id: 7,
      image: tw,
      title: 'TailWind',
      },
      {
      id: 8,
      image: html,
      title: 'HTML-5',
      }    
  ]

  function stack() {
  return (
    <section id='about_stack'>
        <div id='tech_stack'>
        <h2>Tech Stack</h2>
              <div className="container stack_container">
                  <div className='stack_cards'>
                    {
                    data.map(({image, title}) => {
                    return (
                        <article key ='id' className='stack_icon'>
                        <img src={image} alt='title'></img>
                        <small>{title}</small>
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