import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
function HeaderSocial(){
    return(
        <div className="header_social">
            <a href="https://linkedln.com" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com" arget="_blank"><BsGithub/></a>
        </div>
    )
}

export default HeaderSocial;