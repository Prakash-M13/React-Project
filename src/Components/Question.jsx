import React from 'react'
import Nav from './Nav'
import { Button } from '@mui/material'

function Question() {
  return (
    <div>
      <Nav/>
      <div className="ques2">
        <h1>What does it take to become a web <br />developer?</h1>
        <hr />
         <div className="time2">
          <h3>Text</h3>
          <h2>Prakash</h2>
          <h3 style={{marginLeft:"25px"}}>Date</h3>
          <h2>10.Oct.2023</h2>
          <h3 style={{marginLeft:"25px"}}>Read</h3>
          <h2>1 Min</h2>
        <div className='buttime'> <Button>⇭</Button> </div>
        </div> 
        <hr />
        <img src="lap side view.webp" alt="lap" />
      </div>
      <div className="ans1">
        <h3>Web development, also known as website development, encompasses a variety
of tasks <br /> and processes involved in creating websites for the internet.
It involves various specialized <br /> fields, each with its own set of skills
and techniques. While some individuals might view <br /> web development as a
holistic process, it can be broken down into several key areas that <br /> are
essential for building a functional and visually appealing website.</h3>

       <h1>Frontend Development:</h1>

       <h3>Frontend development focuses on the user-facing aspects of a website.
It involves <br /> creating the visual elements that users interact with
directly. Frontend developers use a <br /> combination of languages such as
HTML, CSS, and JavaScript to build and style the layout, <br /> design, and
interactivity of the website. They need to have a strong understanding
of user <br /> experience (UX) and user interface (UI) design to ensure that
the website is both <br /> aesthetically pleasing and user-friendly.
</h3>

    <h1>Backend Development:</h1>

    <h3>Backend development involves the behind-the-scenes functionality of a
website. It <br /> includes server-side scripting, databases, and the logic
that operates behind the scenes to <br /> ensure that the frontend works
smoothly. Backend developers work with programming <br /> languages such as
Ruby, Python, PHP, and Java, and frameworks such as Node.js, Django, <br />
and Laravel. They are responsible for building and maintaining the
server, application, and <br /> database that power the website.
</h3>
      </div>
    </div>
  )
}

export default Question
