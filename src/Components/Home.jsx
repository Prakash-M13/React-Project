import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'

function Home() {
    return (

        <div>
            <div className="head">
                <h1 className='he'><span className='svg'>{"<C/>"}</span> Prakash</h1>
                <div className="div">
                    <li className='svg'><Link style={{ color: "rgb(82, 236, 253)", fontSize: "16px" }} to="/">Home</Link></li>
                    <li><Link to="/blog" className='blolink'>Blogs</Link></li>
                    <li><input className='input' type="search" placeholder='🔍︎' /> </li>
                    <li className='fr'>
                        <a href="https://www.instagram.com/" target='blank' ><img src="insta.svg" alt="insta"
                            style={{ height: "20px", width: "20px" }} className='svg' />
                            <span className='span'>Instagram</span></a></li>
                    <li className='fr2'>
                        <a href="https://discord.com/" target='blank' ><img src="discord.svg" alt="discord"
                            style={{ height: "20px", width: "20px" }} className='svg' />
                            <span className='span'>Discord</span></a></li>
                    <li className='fr2'>
                        <a href="https://github.com/" target='blank' ><img src="github.svg" alt="linkedin"
                            style={{ height: "20px", width: "20px" }} className='svg' />
                            <span className='span'>Github</span></a></li>
                </div>
            </div><hr style={{ width: "92%", borderColor: "rgb(35, 15, 52)" }} />
            <div className="sec">
                <div className="sec1">
                    <h1 className='svg' style={{ textAlign: "center", fontSize: "60px" }}>Developer</h1>
                    <div className='demon'><span className='demon1'>ↈ</span><span>▲</span><span>§</span><span>✕</span><span>∐</span><span>⟬⟭</span></div>
                    <div className="hed1">
                        <Avatar className='avatar' src="lap.avif" alt="info" sx={{ width: 80, height: 80 }} />
                        <h1>Prakash</h1>
                        <h5>Full Stack Devoleper</h5>
                        <div className="point">
                            <h6>✓ Developer</h6>
                            <h6>✓ Developer</h6>
                            <h6>✓ Developer</h6>
                            <h6>✓ Developer</h6>
                        </div>
                        <button>Download CV ⇲</button>
                    </div>
                    <div className="hed2">
                        <h5>{"<h1>"}</h5>
                        <h1 style={{ display: "inline" }}>Hey <br />
                            I'm <span className='color'> Prakash </span>, <br />
                            Full-Stack Developer </h1>
                        <h5>{"</h1>"}</h5>
                        <h5>{"<p>"}</h5>
                        <h6>About Me <br /> <br />
                        Hello! My name is Prakash. I specialize in web development that <br /> 
                     utilizes  HTML, CSS, JS.I am a highly motivated individual and <br /> enthusiastic  
                        dedicated to learning new skills,discovering new <br /> technologies,  
                        and solving problems</h6><h5>{"</p>"}</h5>
                        <h3 className='color'>Let's Talk ⟬⟭</h3>
                    </div>
                    <div className="hed3">
                        <div className="hedd"><span className='hedspan'>4</span> <span className='span12'>Programing <br />Language</span></div>
                        <div className="hedd"><span className='hedspan'>6</span> <span className='span12'>Development <br />Tasks</span></div>
                        <div className="hedd"><span className='hedspan'>8</span> <span className='span12'>Years of <br />Experience</span></div>
                    </div>
                </div>
                <div className="sec2">
                    <div className="overlay"></div>
                    <div className='points'>
                        <h1 className='point1'>ʘ</h1>
                        <h1 className='point2'>.</h1>
                        <h1 className='point2'>.</h1>
                        <h1 className='point2'>.</h1>
                        <h1 className='point2'>.</h1>
                        <h1 className='point2'>.</h1>
                        <h1 className='point2'>.</h1>
                        <h1 className='point2'>.</h1>
                        <h1 className='point3'>•</h1>

                    </div>
                    <h1 className='htag'>About Me</h1>
                    <div className="ptag">
                        {"<p>"} <br />
                        <span className='svg2'> Hello !</span> <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, libero <span className='svg2'> molestiae necessitatibus </span> rem quidem vitae? <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque deserunt laboriosam cumque ipsam rem vitae <span className='svg2'> ab fuga </span>, ratione magni architecto molestiae rerum deleniti numquam voluptatum exercitationem? Iste ipsa aspernatur quaerat. <br />
                        {"</p>"}
                    </div>
                    <img src="lap.avif" alt="demo" />

                </div>
                <div className="sec3">
                    <img className='codebg' src="code.jpeg" alt="background image" />
                    <div className="overlay"></div>
                    <div className='points'>
                        <h1 className='point1'>ʘ</h1>
                        <h1 className='point2'>.</h1>
                        <h1 className='point2'>.</h1>
                        <h1 className='point2'>.</h1>
                        <h1 className='point2'>.</h1>
                        <h1 className='point2'>.</h1>
                        <h1 className='point2'>.</h1>
                        <h1 className='point2'>.</h1>
                        <h1 className='point3'>•</h1>

                    </div>
                    <div className="tag">
                        {"</>"}
                    </div>
                    <div className="skills3">
                        <h1> Skills</h1>
                        <h2>-</h2>
                        <p>I am a Developer.I am a Developer. I am a Developer</p>
                    </div>
                    <div className="dev1">
                        <h1>💻</h1>
                        <h1>Web Development</h1>
                        <p>HTML,CSS,JS,REACT</p>
                    </div>
                    <div className="dev2">
                        <h1>📱</h1>
                        <h1>App Development</h1>
                        <p>Js Advance</p>
                    </div>
                    <div className="logs">
                        <h1> <Avatar src='html.png' alt='html' sx={{ width: 80, height: 80 }} /><br /> <p style={{ color: "rgb(229, 81, 43)" }}>HTML</p></h1>
                        <h1> <Avatar src='css.png' sx={{ width: 80, height: 80 }} /><br /> <p className='gap1' style={{ color: "rgb(150, 202, 234)" }}>CSS</p></h1>
                        <h1> <Avatar src='js.png' sx={{ width: 80, height: 80 }} /><br /> <p className='gap2' style={{ color: "rgb(253, 219, 74)" }}>JS</p></h1>
                        <h1> <Avatar src='react.jpg' sx={{ width: 80, height: 80 }} /><br /> <p style={{ color: "rgb(70, 158, 253)" }}>REACT</p></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
