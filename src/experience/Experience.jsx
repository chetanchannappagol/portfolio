import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import './Experience.css'
function Experience() {
    return (
        <section id="experience">
            {/* <h5>What Experience I Have</h5> */}
            <h2>My Experience</h2>
            <div className="container experience_container">
                <div className="experience">
                    <p>Cognizant</p>
                    <small>(01/2020 - 04/2022)</small>
                    <div className="experience_content">
                        <p className="description">Designation: <small>Associate</small></p>
                        <p className="description">Role: <small>My role is to develop UI based on the requirements mentioned in the jira tickets and i need write test cases for devloped
                            code using react testing library and after developing i need move the UI to main url by QA approval.</small></p>
                            <p className="description">Technology used: <small>React.js, Redux, Html, CSS, javaScript and react testing library</small></p>
                    </div>
                </div>
                <div className="experience">
                    <p>Oracle Cerner</p>
                    <small>(04/2022 - Present)</small>
                    <div className="experience_content">
                        <p className="description">Designation: <small>Software Developer I</small></p>
                        <p className="description">Role: <small>My role is to develop UI based on the requirements mentioned in the jira tickets and i need write test cases for devloped
                            code using react testing library and after developing i need move the UI to main url by QA approval.</small></p>
                            <p className="description">Technology used: <small>Ruby on Rails, Rspec, React.js, Html, CSS, javaScript and react testing library</small></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;