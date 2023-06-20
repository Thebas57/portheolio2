import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagramSquare } from "react-icons/fa";

const Socials = () => {
  return (
    <div className='socials-container'>
        <div>
            <NavLink target="_blank" to="https://github.com/Thebas57">
                <FaGithub />
            </NavLink>
        </div>
        <div>
            <NavLink target="_blank" to="https://www.linkedin.com/in/th%C3%A9o-helf-446a51205/">
                <FaLinkedin />
            </NavLink>
        </div>
        <div>
            <NavLink target="_blank" to="https://www.facebook.com/theo.helf/">
                <FaFacebook />
            </NavLink>
        </div>
        <div>
            <NavLink target="_blank" to="https://www.instagram.com/teopianno/">
                <FaInstagramSquare />
            </NavLink>
        </div>
        <div className="line"></div>
    </div>
  )
}

export default Socials