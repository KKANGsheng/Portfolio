import React from "react"
import {Button,Card} from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FullHeight from "react-full-height"
import pro1 from "../img/Nanyang.jpg"
import pro2 from "../img/credit-card.PNG"
import pro3 from "../img/r7.PNG"

export default function Project(){
    return(
      <FullHeight id="Project">
<Container className="pro-con">
<h3 className="text-warning">Project</h3>
<Row>
  <Col className="mb-4 mb-md-5">
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pro1} className="project-image" />
  <Card.Body>
    <Card.Title>Nanyang Kopitian</Card.Title>
    <Card.Text>Simple website build using HTML,CSS and Javascript.</Card.Text>
    <Button variant="primary" href="https://github.com/KKANGsheng/kopitian">Link to Project</Button>
  </Card.Body>
</Card>
</Col>

<Col className="mb-4 mb-md-5" >
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pro2} className="project-image" />
  <Card.Body>
    <Card.Title>Credit Card Fault detection</Card.Title>
    <Card.Text>Achieved 92 % of accuracy for the model.</Card.Text>
    <Button variant="primary" href="https://github.com/KKANGsheng/Credit_Card">Link to project </Button>
  </Card.Body>
</Card>
</Col>

<Col className="mb-1 mb-md-3">
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pro3} className="project-image" />
  <Card.Body>
    <Card.Title>Seven miracle</Card.Title>
    <Card.Text>Simple React card.A Simple project to understand React Props.</Card.Text>
    <Button variant="primary" href="https://github.com/KKANGsheng/seven_miracle">Link to Project</Button>
  </Card.Body>
</Card>
</Col>

</Row>
 
<h2 className="more"> <a className="links" href="https://github.com/KKANGsheng">View More</a></h2>



</Container></FullHeight>
      )
}