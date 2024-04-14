import React from "react";
import ME from '../assets/m4.png'
import { FaAward } from "react-icons/fa";
import { GoOrganization } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import '../about/About.css'
function About() {
    return (
        <section id="about">
            <h5>Get to know more</h5>
            <h2>About Me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="about me" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon"/>
                            <h5>
                                Experience
                            </h5>
                            <small>
                                4+ years working
                            </small>
                        </article>
                        <article className="about_card">
                            <GoOrganization className="about_icon"/>
                            <h5>
                                Organizations
                            </h5>
                            <small>
                                worked in 2 rganizations
                            </small>
                        </article>
                        <article className="about_card">
                            <GrProjects className="about_icon"/>
                            <h5>
                                Projects
                            </h5>
                            <small>
                                worked on 10+ projects
                            </small>
                        </article>
                    </div>
                    <p>
                        something about me
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;