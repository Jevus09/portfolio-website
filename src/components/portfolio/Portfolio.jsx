import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/exmple.PNG'
import Crypto from '../../assets/Crypto.PNG'
import ELE from '../../assets/electronix.PNG'
import { FaReact } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { TbBrandFirebase } from 'react-icons/tb'
import { DiMongodb } from 'react-icons/di'
import { SiExpress } from 'react-icons/si'
import { GrNode } from 'react-icons/gr'

const data = [
  {
    id: 1,
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
    id: 2,
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
  // {
  //   id: 3,
  //   image: IMG1,
  //   title: 'Example title 3',
  //   language: (
  //     <>
  //       <FaReact /> <FaCss3Alt />
  //     </>
  //   ),
  //   github: 'https://github.com/Jevus09',
  //   demo: 'https://github.com/Jevus09',
  //   description:
  //     'This is a crypto website that utilizes the Coingecko API to provide users with real-time information about cryptocurrency prices and market trends. Built with Firebase as the back-end infrastructure, ReactJS for the front-end framework, and Material UI for a sleek and intuitive user interface',
  // },
  // {
  //   id: 4,
  //   image: IMG1,
  //   title: 'Example title 4',
  //   language: (
  //     <>
  //       <FaReact /> <FaCss3Alt />
  //     </>
  //   ),
  //   github: 'https://github.com/Jevus09',
  //   demo: 'https://github.com/Jevus09',
  //   description:
  //     'This is a crypto website that utilizes the Coingecko API to provide users with real-time information about cryptocurrency prices and market trends. Built with Firebase as the back-end infrastructure, ReactJS for the front-end framework, and Material UI for a sleek and intuitive user interface',
  // },
]

const Portfolio  = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {data.map(
          ({
            id,
            image,
            title,
            github,
            demo,
            language,
            description,
          }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title} />
                </div>
                <div className='second'>
                  <div id='text'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className='stack'>
                      <h4>{language}</h4>
                    </div>
                    <div className='portfolio_item-cta'>
                      <a
                        href={demo}
                        className='btn btn-primary'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Live Demo
                      </a>
                      <a
                        href={github}
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
          }
        )}
      </div>
    </section>
  )
}

export default Portfolio
