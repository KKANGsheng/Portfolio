import { Navbar } from 'react-bootstrap'
import Container from "react-bootstrap/Container"
import {Nav} from "react-bootstrap"
import "../style.css"
import { scroller } from "react-scroll"

export default function Menu(){
    return(
<>
  <Navbar bg="light" variant="light" sticky="top">
    <Container>
    <Navbar.Brand href="#Home">Kang Sheng</Navbar.Brand>
    <Nav>
      <Nav.Link onSelect={() => scroller.scrollTo('#Home', {
              smooth: true,
              offset: -70,
              duration: 500,
          })}
      className="nav-links" href="#Home">Home</Nav.Link>
      <Nav.Link className="nav-links"onSelect={() => scroller.scrollTo('#About', {
              smooth: true,
              offset: -70,
              duration: 500,
          })}
      href="#About">About</Nav.Link>
      <Nav.Link  className="nav-links" onSelect={() => scroller.scrollTo('#Skills', {
              smooth: true,
              offset: -70,
              duration: 500,
          })} href="#Skills">Skills</Nav.Link>
      <Nav.Link  className="nav-links"  href="#Project">Project</Nav.Link>
      <Nav.Link  className="nav-links" onSelect={() => scroller.scrollTo('Contact', {
              smooth: true,
              offset: -70,
              duration: 500,
          })}href="#Contact">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
    )
}