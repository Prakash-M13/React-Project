import React from 'react'
import Nav from './Nav'
import './About.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

function About() {
  return (
    <div className='about'>
      <Nav/>
      <div className="heD">
        <h1>Blogs</h1>
        <h2>● <span className='ddd'>-</span>●</h2>
        <p>My thoughts on technology and business,welcome to subscribe</p>
        <button>Subscribe My Blogs</button>
      </div> <hr />
      <div className="qus1">
        <img src="lap side view.webp" alt="img" />
       <div className="flex">
        <h1> <Link to="/Question" className='flexh1'>What does it take to <br />become a web developer?</Link></h1>
        <p>Web development,also known as website <br />
        development,encompasses a variety of tasks and <br />
        processes involved in craeting websites for the <br />
        internet....</p>
        <h3 className='more'> <Link to="/Question"><u>Read More {">>"}</u> </Link></h3>
        <div className="time">
          <Button>Web Developer</Button>
          <h3>Text</h3>
          <h2>Prakash</h2>
          <h3>Date</h3>
          <h2>10 Oct 2023</h2>
          <h3>Read</h3>
          <h2>1 Min</h2>
        </div> 
      </div>
      </div> <hr />

       <div className="qus1">
        <img src="lap side view.webp" alt="img" />
       <div className="flex">
        <h1> <Link to="/Question" className='flexh1'>What does it take to <br />become a web developer?</Link></h1>
        <p>Web development,also known as website <br />
        development,encompasses a variety of tasks and <br />
        processes involved in craeting websites for the <br />
        internet....</p>
        <h3 className='more'> <Link to="/Question"><u>Read More {">>"}</u> </Link></h3>
        <div className="time">
          <Button>Web Developer</Button>
          <h3>Text</h3>
          <h2>Prakash</h2>
          <h3>Date</h3>
          <h2>10 Oct 2023</h2>
          <h3>Read</h3>
          <h2>1 Min</h2>
        </div> 
      </div>
      </div> <hr />

        <div className="qus1">
        <img src="lap side view.webp" alt="img" />
       <div className="flex">
        <h1> <Link to="/Question" className='flexh1'>What does it take to <br />become a web developer?</Link></h1>
        <p>Web development,also known as website <br />
        development,encompasses a variety of tasks and <br />
        processes involved in craeting websites for the <br />
        internet....</p>
        <h3 className='more'> <Link to="/Question"><u>Read More {">>"}</u> </Link></h3>
        <div className="time">
          <Button>Web Developer</Button>
          <h3>Text</h3>
          <h2>Prakash</h2>
          <h3>Date</h3>
          <h2>10 Oct 2023</h2>
          <h3>Read</h3>
          <h2>1 Min</h2>
        </div> 
      </div>
      </div> <hr />

    
    </div>
  )
}

export default About
