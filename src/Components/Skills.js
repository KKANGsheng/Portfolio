import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FullHeight from "react-full-height"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Skills(){
    return(
        <FullHeight id="Skills">
    <Container className="skill-con">
        <Row>
            <Col> <h2 className="text-warning " id="Skills">Skills</h2></Col>
        </Row>
        <Row>
            <Col  xs={6} md={3} >
            <FontAwesomeIcon className='skills-icons' xs={6} md={6} icon={['fab', 'fa-html5'] } size='5x' />
            <p className="text-white">HTML5</p> 
            </Col>
            <Col  xs={6} md={3}  > 
            <FontAwesomeIcon className='skills-icons' icon={['fab', 'fa-css3-alt']} size='5x' />
            <p className="text-white">CSS</p>
            </Col>
            <Col xs={6} md={3}>
            <FontAwesomeIcon className='skills-icons' icon={['fab', 'fa-java']} size='5x' />
            <p className="text-white">Java</p>
            </Col>

            <Col xs={6} md={3}>
            <FontAwesomeIcon className='skills-icons' icon={['fab', 'fa-python']} size='5x' />
            <p className="text-white">Python</p>
            </Col>

        </Row>
        <Row>
            <Col xs={6} md={3}>
            <FontAwesomeIcon className='skills-icons' icon={['fab', 'js']} size='5x' />
            <p className="text-white">Javascript</p>
            </Col>    
            <Col  xs={6} md={3} >
            <FontAwesomeIcon className='skills-icons' icon={['fab', 'react']} size='5x' />
            <p className="text-white">React</p>

            </Col>

            <Col xs={6} md={3}>  
            <FontAwesomeIcon className='skills-icons' icon={['fas','fa-database']} size='5x' />
            <p className="text-white">SQL</p>
            </Col>
        </Row>
        <Row>
            <h3 className="text-warning">Education</h3>
            <div className="degree text-white"> -Bachelor of science at Sunway University (2018-2021)</div>
            <div className="foundation text-white">-Completed Mufy (Monash university Foundation year) (2017)</div>
        </Row>

    </Container> </FullHeight>

    )
}