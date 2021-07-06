import React from "react"
import { Jumbotron, Row, Col } from 'reactstrap';
import './style.css';
import skills from "../../Info/skills.js";

class About extends React.Component {

  state = {
    skills
  };

  render() {
    return (
      <Jumbotron className="m-3 text-center">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">I'm Joseph Young, a software developer.</p>
        <hr className="my-4" />
        <Row className="justify-content-center">
          <Col>
            <p className="">Passionate about approaching programming challenges from multiple viewpoints and collaborating with others to provide purposeful and memorable web applications. Eager to leverage skills in the future as part of a fast-paced, quality-driven team in order to build better, innovative, and memorable experiences on the web.</p>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row className="justify-content-center">
          <Col xs="8">
            <p className="font-weight-bold">Technical Skills</p>
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