import React from "react";
import CV from '../assets/cv.pdf'
import ME from '../assets/me1.jpeg'
import HeaderSocial from "../header/HeaderSocial.jsx";
import './Header.css'

function Header(){
    return(
        <header id="home">
            <div className="container header__container">
                <h5>
                    Hello I'am
                </h5>
                <h1>
                    Chetan Channappagol
                </h1>
                <h5 className="text-light">
                    FullStack Developer
                </h5>
                <div className="cta">
                <a href={CV} download className="btn">Download CV</a>
                <a href="#contact" className="btn btn-primary">Let's talk</a>
                </div>
                
                <HeaderSocial/>

                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <a href="#contact" className="scrol_down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;