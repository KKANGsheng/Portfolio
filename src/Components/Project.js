import React from "react"
import {Button,Card} from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FullHeight from "react-full-height"


export default function Project(){
    return(
      <FullHeight id="Project">
<Container className="pro-con">
<h3 className="text-warning">Project</h3>
<Row>
  <Col>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/Nanyang.jpg" className="project-image" />
  <Card.Body>
    <Card.Title>Nanyang Kopitian</Card.Title>
    <Card.Text>Simple website build using HTML,CSS and Javascript.</Card.Text>
    <Button variant="primary" href="https://github.com/KKANGsheng/kopitian">Link to Project</Button>
  </Card.Body>
</Card>
</Col>

<Col>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/card.jpg" className="project-image" />
  <Card.Body>
    <Card.Title>Credit Card Fault detection</Card.Title>
    <Card.Text>Attend kaggle competition and achieved 92 % of accuracy for the model.</Card.Text>
    <Button variant="primary" href="https://github.com/KKANGsheng/Credit_Card">Link to project </Button>
  </Card.Body>
</Card>
</Col>

<Col>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/r7.PNG" className="project-image" />
  <Card.Body>
    <Card.Title>Seven miracle</Card.Title>
    <Card.Text>Simple React card.A Simple project to understand React Props.</Card.Text>
    <Button variant="primary" href="https://github.com/KKANGsheng/seven_miracle">Link to Project</Button>
  </Card.Body>
</Card>
</Col>


</Row>



</Container></FullHeight>
      )
}