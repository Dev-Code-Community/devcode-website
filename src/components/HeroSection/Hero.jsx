import React from 'react'
import './Hero.css';
const Hero = () => {
  return (
    <div className='hero-section'>
        <div className='hero-container'>
            <div className='hero-text' >
                <p className='dev-code'>&lt;dev code&gt;</p>
                <p className='dev-community'>Join the Community of Developers</p>
                <p className='dev-description'>Collaborate, Learn, Innovate, Participate in events, contests, and challenges to win prizes and recognition</p>
                <button className='dev-btn'>Join Our Community</button>
            </div>
            <div className='hero-image' >
              <img src="assets/hero.png"></img>
            </div>
        </div>
    </div>
  )
}

export default Hero