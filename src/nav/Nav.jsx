import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import './Nav.css'

function NavBar() {
    const [active, setActive] = useState('home');
    return (
        <div>
            <nav>
                <a onClick={() => setActive('home')} href="#home" ><AiOutlineHome /></a>
                <a onClick={() => setActive('about')} href="#about" ><AiOutlineUser /></a>
                <a onClick={() => setActive('skills')} href="#skills" ><GiSkills /></a>
                <a onClick={() => setActive('experience')} href="#experience" ><BiBook /></a>
                <a onClick={() => setActive('contact')} href="#contact" ><BiMessageSquareDetail /></a>
            </nav>
            <div className="nav-socails">
            </div>
        </div>

    )
}

export default NavBar;