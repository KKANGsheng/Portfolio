import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Contact(){
   return( 
   <div id="Contact">
        <h1 className="text-center text-warning">Contact</h1>

         <p className="text-white text-center fs-5">Phone Number:+60176996557</p>

        <h6 className="text-center text-white fs-5">You can also reach me through these platforms</h6>
        <div className="social-media">
            
        <a href="https://my.linkedin.com/in/goh-kang-sheng-ab448420b" className="icons">
        <FontAwesomeIcon icon={['fab','linkedin'] } size="3x" />
        </a>

        <a href="mailto:kangsheng0721@gmail.com" className="icons">
        <FontAwesomeIcon icon={['fas', 'envelope']} size='3x' />
        </a>


        </div>

    </div>
   )
}