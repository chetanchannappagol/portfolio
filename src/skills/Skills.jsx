import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import './Skills.css'
function Skills(){
    return(
        <section id="skills">
            <h5>What Skills I Have</h5>
            <h2>My Skills</h2>
            <div className="container skills_container">
                <div className="skills_frontend">
                    <h3>Frontend</h3>
                    <div className="frontend_details">
                        <article className="frontend_detail">
                            <BsPatchCheckFill className="skills_icon" />
                            <div>
                            <h5>HTML</h5>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="frontend_detail">
                            <BsPatchCheckFill className="skills_icon" />
                            <div>
                            <h5>CSS</h5>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="frontend_detail">
                            <BsPatchCheckFill className="skills_icon" />
                            <div>
                            <h5>JavaScript</h5>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="frontend_detail">
                            <BsPatchCheckFill className="skills_icon" />
                            <div>
                            <h5>React JS</h5>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="frontend_detail">
                            <BsPatchCheckFill className="skills_icon" />
                            <div>
                            <h5>Redux</h5>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="frontend_detail">
                            <BsPatchCheckFill className="skills_icon" />
                            <div>
                            <h5>Next JS</h5>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="skills_backend">
                <h3>Backend</h3>
                    <div className="backend_details">
                        <article className="backend_detail">
                            <BsPatchCheckFill className="skills_icon" />
                            <div>
                            <h5>Node JS</h5>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="backend_detail">
                            <BsPatchCheckFill className="skills_icon" />
                            <div>
                            <h5>Ruby On Rails</h5>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="backend_detail">
                            <BsPatchCheckFill className="skills_icon" />
                            <div>
                            <h5>MySQL</h5>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="backend_detail">
                            <BsPatchCheckFill className="skills_icon" />
                            <div>
                            <h5>Mongo DB</h5>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;