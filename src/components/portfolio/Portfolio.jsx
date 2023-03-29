import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/exmple.PNG'
import { FaReact } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Example title',
    language: <FaReact />,
    language2: <FaCss3Alt />,
    github: 'https://github.com/Jevus09',
    demo: 'https://github.com/Jevus09'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Example title 2',
    language: <FaReact />,
    language2: <FaCss3Alt />,
    github: 'https://github.com/Jevus09',
    demo: 'https://github.com/Jevus09'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Example title 3',
    language: <FaReact />,
    language2: <FaCss3Alt />,
    github: 'https://github.com/Jevus09',
    demo: 'https://github.com/Jevus09'
  },
  {
    id: 4,
    image: IMG1,
    title: 'Example title 4',
    language: <FaReact />,
    language2: <FaCss3Alt />,
    github: 'https://github.com/Jevus09',
    demo: 'https://github.com/Jevus09'
  }
]




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({ id, image, title, github, demo, language, language2 }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title} />
                </div>
                <div className='secod'>
                  <div id='text'>
                    <h3>{title}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='stack'>
                      <h4>{language}</h4>
                      <h4>{language2}</h4>
                    </div>
                    <div className='portfolio_item-cta'>
                      <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                      <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                  </div>
                </div>
              </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default Portfolio