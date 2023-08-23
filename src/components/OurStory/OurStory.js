import React from "react";
import "./OurStory.sass";
import ButtonOutline from "../Button/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import OurStoryIcon from "../../assets/images/big_left_icon.png";

const OurStory = () => {
  return (
    <section id="OurStory" className="OurStory_block">
      <Container>
        <Row>
          <Col lg={5} className="text-center">
            <Image src={OurStoryIcon} fluid />
          </Col>
          <Col lg={7} className="story-description">
            <h2>OUR STORY</h2>
            <p className="description_rgba">
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus
            </p>

            <p className="description_rgba">
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
              a ornare odio. Sed non mauris vitae erat consequat auctor eu in
              elit. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>
            <ButtonOutline className="button2">LEARN MORE</ButtonOutline>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurStory;
