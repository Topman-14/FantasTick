import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaArrowRightLong } from 'react-icons/fa6'

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className='landing_wrapper'>
      <style>
        {`.pages{
            padding: 0;
            max-width: none;
            margin-inline: 30px;
            min-height: 100vh;
          }
          body{
            min-height: 100vh;
            background: url('/layered-peaks-haikei (6).svg') left bottom / cover no-repeat;
          }
      `}</style>
      <nav className='landing_nav'>
        <a href="/" className='home_link'>
          <h1><span>Fantas</span>Tick</h1> 
          <img className="logo" src="/fantastick_logo.png" alt="" /> 
        </a>
        <div className='landing_links'>

          <a className='gh_star' href="https://github.com/Topman-14/FantasTick/"><BsGithub className='gh_logo'/><span> Star this Repo🤩</span></a>

          <a href="http://" className='tw_link gh_star'>
            <img src="/twitterx.svg" alt="" /><span>Review on Twitter</span></a>

          <div className="nav_login" onClick={()=>navigate('/login')} tabIndex={2}>Login</div>
          <div className="nav_signup" onClick={()=>navigate('/signup')} tabIndex={1}>Signup</div>
        </div>
      </nav>
      <main id='hero'>
        <div id='hero_text'>
          <h2>Craft your Tomorrow <span>Today!</span></h2>
          <p>Experience Productivity Redefined</p>
          <div id='cta_btns'>
            <button className="hero_login" onClick={()=>navigate('/login')}>Login</button>
            <button className="hero_signup" onClick={()=>navigate('/signup')}>Get Started<FaArrowRightLong className='right_icon'/></button>
          </div>
        </div>
        <div className='landing_img'>
          <img src="/landing_img.png" alt="business woman excited about tasks" />
        </div>
      </main>
      <div className='landing_footer'>
          <p>By Topman</p>
          <div className='social_icons'>
            <a href="https://github.com/Topman-14"><BsGithub className='gh_footer_icon social_hover'/></a>
            <a href="https://www.linkedin.com/in/tope-akinkuade"><BsLinkedin className='ln_footer_icon social_hover'/></a>
            <a href="https://www.twitter.com/Topman_14"><img src="/twitterx_bg.svg" alt="" className='social_hover'/></a>
          </div>
      </div>
    </div>
  )
}
