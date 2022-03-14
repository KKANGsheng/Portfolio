import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Contact(){
   return( 
   <div id="Contact">
        <h1 className="d-flex justify-content-sm-center align-items-center text-warning">Contact</h1>
        <h6 className="text-center text-white">You can Reach me through these platforms</h6>
        <div className="social-media">
            
        <a href="https://my.linkedin.com/in/goh-kang-sheng-ab448420b">
        <FontAwesomeIcon icon={['fab','linkedin']} size="3x" />
        </a>

        <a href="mailto:kangsheng0721@gmail.com">
        <FontAwesomeIcon icon={['fas', 'envelope']} size='3x' />
        </a>
        </div>

    </div>
   )
}