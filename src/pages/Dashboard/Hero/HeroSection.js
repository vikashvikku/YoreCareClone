import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../../Images/example.png";

import ex from "../../../Images/ex.png";
import { Typography } from "@mui/material";

import "./hero-section.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <Container style={{ backgroundColor: "#f9f9f9" }}>
        <Row className="row">
          <Col>
            <div className="hero__content">
              <Typography variant="h3">
                {" "}
                Digitize, Preserve & Empower{" "}
                <span style={{ color: "#4D31E7" }} className="sp">
                  Healthcare
                </span>{" "}
              </Typography>
              <Typography paragraph={true}>
                Your comprehensive online healthcare solution, we provide 24x7
                access to personalized healthcare services, seamless integration
                of health devices, and daily health updates, all within a
                unified and empowering ecosystem.{" "}
              </Typography>
            </div>
          </Col>

          <Col className="col">
            <img src={heroImg} alt="" className=" hero__img" />
            <div className="image-container">
              <img src={ex} alt="" className="pendulum-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
