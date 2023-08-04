import React from 'react'
import './Hero.css'
const Hero = () => {
    return (
      <div className='hero-section'>
          <div className='hero-container'>
              <div className='hero-text' >
                  <p className='dev-code'>&lt;Dev Code&gt;</p>
                  <p className='dev-community'>Join the Community of Developers</p>
                  <p className='dev-description'>Collaborate, Learn, Innovate, Participate in events, contests, and challenges to win prizes and recognition</p>
                  <button className='dev-btn'>Join Our Community</button>
              </div>
              <div className='hero-image' >
                <img src="src\assets\hero.png" alt='hero'></img>
              </div>
          </div>
          <div className='hero-btns'>
                <div className='social-btn'><img src='https://cdn-icons-png.flaticon.com/512/59/59439.png'></img></div>
                <div className='social-btn'><img src='https://img.freepik.com/free-icon/twitter_318-788985.jpg'></img></div>
                <div className='social-btn'><img src='https://cdn-icons-png.flaticon.com/512/49/49068.png'></img></div>
                <div className='social-btn'><img src='https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3286-thumb.png'></img></div>
                <div className='social-btn'><img src='https://www.transparentpng.com/thumb/youtube-logo/hd-clipart-youtube-logo-19.png'></img></div>
          </div>
      </div>
    )
  }

export default Hero