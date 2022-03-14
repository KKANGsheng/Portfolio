import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "../style.css"
import FullHeight from "react-full-height"


export default function About(){
    return(
      <FullHeight id="About">
        <Container className="move-cen">
            <Row>
              <Col>
                <h1 className="text-warning">About me</h1>
                <div className="">
                <p className="tw">I am recently graduate from bachelor of science in Computer Science at <span className="highlighted"> Sunway University </span></p>
                <p className="tw">I am passionate in <span className="highlighted">Web development </span> and  <span className="highlighted">Data science areas</span>.</p>
                <p className="tw">My eventual career goal is to become a <span className="highlighted">software developer</span> with a
                 long-term goal aspiration of moving into <span className="highlighted"> management </span>.</p>
                </div>
              </Col>
            </Row>

        </Container>
        </FullHeight>
    )
}