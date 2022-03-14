import React from "react"
import FullHeight from "react-full-height"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"



export default function Home(){
    return (
    <FullHeight id='Home'> 
    <div className="home-con">
        <h1 className="text-white mt-5 text-center">Hi,🖐🏻 I am KANG SHENG</h1>
        <p className="text-white text-center ">Graduated from <span className="highlighted"> Bachelor of Computer Science </span> at Sunway University.</p>
        
        <div className="social-media">
    
       <a href="https://github.com/KKANGsheng">
       <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>

        <a href="https://my.linkedin.com/in/goh-kang-sheng-ab448420b">
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>

        <a href="mailto:kangsheng0721@gmail.com">
        <FontAwesomeIcon icon={faGoogle}  size="lg"/>
        </a>

        </div>

        </div>
        </FullHeight>
    )  
}