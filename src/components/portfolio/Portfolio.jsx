import React from 'react'
import './portfolio.css'
import Crypto from '../../assets/crypto.webp'
import ELE from '../../assets/electronix.webp'
import GOAL from '../../assets/goaltrackr.webp'
import { FaReact } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { TbBrandFirebase } from 'react-icons/tb'
import { DiMongodb } from 'react-icons/di'
import { SiExpress } from 'react-icons/si'
import { GrNode } from 'react-icons/gr'
import {SiTailwindcss} from 'react-icons/si'

const data = [
  {
    id: 1,
    image: ELE,
    title: 'Electronix Hub',
    language: (
      <>
        <FaReact /> <DiMongodb />
        <SiExpress /> <GrNode />
      </>
    ),
    github: 'https://github.com/Jevus09/electronix-hub',
    demo: 'https://electronixhub.herokuapp.com/',
    description:
      'MERN eCommerce website focused on tech products. Leveraging MongoDB, Express.js, React.js, and Node.js, I created a seamless user experience, robust backend functionality, and secure payment integration. This platform showcases my expertise in crafting modern, responsive eCommerce solutions.',
  },
  {
    id: 2,
    image: Crypto,
    title: 'Crypto Central',
    language: (
      <>
        <FaReact /> <FaCss3Alt /> <TbBrandFirebase />
      </>
    ),
    github: 'https://github.com/Jevus09/crypto-central',
    demo: 'https://crypto-central-01.netlify.app/',
    description:
      'This is a crypto website that utilizes the Coingecko API to provide users with real-time information about cryptocurrency prices and market trends. Built with Firebase as the back-end infrastructure, ReactJS for the front-end framework, and Material UI for a sleek and intuitive user interface',
  },
  {
    id: 3,
    image: GOAL,
    title: 'GoalTrackr',
    language: (
      <>
        <FaReact /> <SiTailwindcss />
      </>
    ),
    github: 'https://github.com/Jevus09/goaltrackr',
    demo: 'https://goaltrackr.netlify.app/',
    description:
      'The football website portfolio project showcases a dynamic and engaging platform built with React and Tailwind CSS. Utilizing the API-FOOTBALL, it seamlessly displays live games, league fixtures, and allows users to filter matches from the top 5 leagues. With its intuitive design and real-time updates, football enthusiasts can stay up-to-date with their favorite teams and leagues.',
  },

]

const Portfolio  = () => {
  return (
    <section id='portfolio' style={{height: '100%'}}>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container' style={{    
        display: 'grid',
        gap: '10vw',
        justifyContent: 'center',
        alignItems: 'center',}}>
        {data.map((item, index,) => (
             (
              <article key={item.id} className={`${index % 2 ? 'left' : 'right'}`}>
                <div className='item'>
                <div className='portfolio_item-image'>
                  <a href={item.demo} target='_blank' rel='noreferrer' ><img src={item.image} alt={item.title} /></a>
                </div>
                <div className='second'>
                  <div className='text'>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className='stack'>
                      <h4>{item.language}</h4>
                    </div>
                    <div className='portfolio_item-cta'>
                      <a
                        href={item.demo}
                        className='btn btn-primary'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Live Demo
                      </a>
                      <a
                        href={item.github}
                        className='btn'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
                </div>
              </article>
            )
          )
        )}
      </div>
    </section>
  )
}

export default Portfolio
