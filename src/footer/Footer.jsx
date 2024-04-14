import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './Footer.css'
function Footer(){
    return(
        <footer>
            <a href="#" className="footer_logo">Chetan Channappagol</a>
            <ul className="permalinks">
                <li>
                    <a href="#home">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about">
                        About
                    </a>
                </li>

                <li>
                    <a href="#skills">
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#experience">
                        Experience
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        Contacts
                    </a>
                </li>
            </ul>
            <div className="footer_social">
                <a href="https:/github.com"><FaGithub/></a>
                <a href="https:/linkedln.com"><FaLinkedinIn/></a>
                <a href="https:/instagram.com"><FaInstagram/></a>
                <a href="https:/twitter.com"><FaTwitter/></a>
            </div>
            <div className="footer_copyright">
                <small>
                    &copy; All Rights Reserved
                </small>
            </div>
        </footer>
    )
}

export default Footer;