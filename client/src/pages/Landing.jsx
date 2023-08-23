import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { BsLinkedin, BsGithub } from 'react-icons/bs';

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      <style>
        {`.pages{
            padding: 0;
          }
          body{
            height: 100vh;
            background: url('/layered-peaks-haikei (6).svg') left bottom / cover no-repeat;
          }
      `}</style>
      <nav className='landing_nav'>
        <div className='home_link'>
          <h1><span>Fantas</span>Tick</h1> 
          <img className="logo" src="/fantastick_logo.png" alt="" /> 
        </div>
        <div className='landing_links'>

          <a className='gh_star' href="https://github.com/Topman-14/FantasTick/"><BsGithub className='gh_logo'/>  Star this Repo🤩</a>

          <a href="http://" className='tw_link gh_star'>
            <img src="/twitterx.svg" alt="" />Review on Twitter</a>

          <div className="nav_login" onClick={()=>navigate('/login')} tabIndex={2}>Login</div>
          <div className="nav_signup" onClick={()=>navigate('/signup')} tabIndex={1}>Signup</div>
        </div>
      </nav>
      <main id='hero'>
        <div id='hero_text'>
          <p>Experience Productivity Redefined</p>
          <h2>Craft your Tomorrow <span>Today!</span></h2>
          <div id='cta_btns'>
            <button className="hero_login" onClick={()=>navigate('/login')}>Login</button>
            <button className="hero_signup" onClick={()=>navigate('/signup')}>Start Ticking</button>
          </div>
        </div>
        <div className='landing_img'>
          <img src="/landing_img.png" alt="business woman excited about tasks" />
        </div>
      </main>
      <footer>

      </footer>
    </div>
  )
}
