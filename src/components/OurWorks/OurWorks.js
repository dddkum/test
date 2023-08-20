import React from "react";
import "./OurWorks.sass";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import right_arrow from "../../assets/images/right_arrow.png";
import ButtonOutline from "../Button/Button";

const icons = [
  {
    iconUrl: require("../../assets/images/square2.png"),
    linkUrl: "#",
  },
  {
    iconUrl: require("../../assets/images/square5.png"),
    linkUrl: "#",
  },
  {
    iconUrl: require("../../assets/images/square4.png"),
    linkUrl: "#",
  },
  {
    iconUrl: require("../../assets/images/square3.png"),
    linkUrl: "#",
  },
  {
    iconUrl: require("../../assets/images/square6.png"),
    linkUrl: "#",
  },
  {
    iconUrl: require("../../assets/images/square1.png"),
    linkUrl: "#",
  },
  {
    iconUrl: require("../../assets/images/square1.png"),
    linkUrl: "#",
  },
  {
    iconUrl: require("../../assets/images/square2.png"),
    linkUrl: "#",
  },
  {
    iconUrl: require("../../assets/images/square3.png"),
    linkUrl: "#",
  },
  {
    iconUrl: require("../../assets/images/square4.png"),
    linkUrl: "#",
  },
  {
    iconUrl: require("../../assets/images/square5.png"),
    linkUrl: "#",
  },
  {
    iconUrl: require("../../assets/images/square6.png"),
    linkUrl: "#",
  },
  {
    iconUrl: require("../../assets/images/square3.png"),
    linkUrl: "#",
  },
  {
    iconUrl: require("../../assets/images/square4.png"),
    linkUrl: "#",
  },
];

const OurWorks = () => {
  return (
    <section id="our_works" className="text-center">
      <Container fluid>
        <Row className="justify-content-between our_works">
          <Col sm={2} className="text-left">
            <h2 className="title_works text-center">OUR WORKS</h2>
          </Col>
          <Col sm={6} md={3} className="text-end">
            <div className="title text-center">
              <a href="#" className="arrow-link">
                See All Project in dribbble{" "}
                <img
                  src={right_arrow}
                  alt="right_arrow"
                  className="right_arrow"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="works_tabs justify-content-center">
          {icons.map((icon, index) => (
            <Col xs={6} md="auto" key={index} className="p-2">
              <a href={icon.linkUrl}>
                <Image
                  src={icon.iconUrl}
                  className="our-work-image"
                  fluid
                  alt={`иконка ${index + 1}`}
                />
              </a>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="works_button_block">
        <ButtonOutline className="works_button">LOAD MORE</ButtonOutline>
      </div>
    </section>
  );
};

export default OurWorks;
