import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="box">
                <h1 className='he2'><span className='svg'>{"<C/>"}</span> Prakash</h1>
                <div className="div2">
                    <li><Link className='goli' to="/">Home</Link></li>
                    <li><Link className='goli2' to="/blog">Blogs</Link></li>

                    <div className="search-container">
                        {/* Search Icon */}
                        <span className="search-icon"onClick={() => setOpen(!open)}>🔍︎</span>

                        {/* Search Bar */}
                        {open && (
                            <input type="text"className="search-input"placeholder="Search here..."autoFocus/>
                        )}
                    </div>
                    <div className="lefmov">
                    <li className='lefmov1'>
                        <a href="https://www.instagram.com/" target='blank' ><img src="insta.svg" alt="insta"
                            style={{ height: "30px", width: "30px" }} /></a></li>
                    <li className='lefmov1'>
                        <a href="https://discord.com/" target='blank' ><img src="discord.svg" alt="discord"
                            style={{ height: "30px", width: "30px" }} /></a></li>
                    <li className='lefmov1'>
                        <a href="https://github.com/" target='blank' ><img src="github.svg" alt="linkedin"
                            style={{ height: "30px", width: "30px" }} /></a></li> </div></div>

            </div>
            <hr style={{ width: "92%", borderColor: "rgb(35, 15, 52)",marginTop:"-5px" }} />
        </div>
    )
}
