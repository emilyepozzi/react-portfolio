import React from "react"
import { Jumbotron, Row, Col } from 'reactstrap';
import "./styles.css";
import skills from "../../Info/skills.js";

class About extends React.Component {

  state = {
    skills
  };

  render() {
    return (
      <Jumbotron className="m-3 text-center">
        <h1 className="display-4">Heyo!</h1>
        <p className="lead">I'm Emily Pozzi, an aspiring Front End Developer.</p>
        <hr className="my-4" />
        <Row className="justify-content-center">
          <Col>
            <p className="">I am extremely passionate about the art of web development in all its forms.</p>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row className="justify-content-center">
          <Col xs="8">
            <p className="font-weight-bold">My Technical Skills:</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {this.state.skills.map(skill => (
            <Col>
              <img className="skillsLogo" src={skill.src} alt="Logo"/>
              <hr className="my-2" />
              <p>{skill.skill}</p>
            </Col>
          ))}
        </Row>
      </Jumbotron>
    );
  }

};

export default About;