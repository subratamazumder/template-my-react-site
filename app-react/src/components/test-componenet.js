import React from "react";
import { Row, Col} from "react-bootstrap";
import GithubLogo from "../GitHub-Mark-Light-120px-plus.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import BrandLogo from "../dp-logo.png";
import Image from "react-bootstrap/Image";
class TestComp extends React.Component {
  constructor(props) {
    console.log("TestComp constructing");
    super(props);
  }
  render() {
    return (
      <div id="test">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="https://subrata.dev/template-my-react-site/" className="text-white font-weight-bold">
            <img
              alt=""
              src={BrandLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Test App
          </Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            
          </Nav>
          <Nav.Link href="https://github.com/subratamazumder/template-my-react-site">
          <Image
            src={GithubLogo}
            alt="Github"
            fluid
            rounded
            width="30"
            height="30"
          />
        </Nav.Link>
        </Navbar>
        <Row>
          <Col sm>
            
          </Col>
        </Row>
        <Row>
          <Col></Col>
        
        </Row>
        <Row>
          <Col sm>
            <div className="text-center">
            </div>
          </Col>
        </Row>
        <Row>
          <br />
        </Row>
      </div>
    );
  }
}
export default TestComp;
