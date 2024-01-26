import React from "react";import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import ahmed from "../../Assets/ahmed.jpg";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row
          className="row-about"
          style={{ justifyContent: "center", padding: "10px" }}
        >
          <Col
            md={12}
            lg={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.4em", paddingBottom: "20px" }}>
              من <strong className="purple"> أنا </strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={12}
            lg={5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
            className="about-img circular-image"
          >
            <Tilt>
              <img
                src={ahmed}
                alt="personal"
                className="img-fluid rounded-circle"
              />
            </Tilt>
          </Col>
        </Row>
        <h1 className="project-heading">
          المهرات <strong className="purple"> الشخصية </strong>
        </h1>

        <Techstack />
      </Container>
    </Container>
  );
}

export default About;
