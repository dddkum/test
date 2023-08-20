import React from "react";
import "./Main.sass";
import { Container, Row, Col } from 'react-bootstrap';
import ButtonOutline from "../Button/Button";

const Main = () => {
  return (
    <section id="about">
  <Container>
    <Row className="justify-content-center">
      <Col md={10} className="text-center">
        <h1 className="text-center text-white about">
          We Are Awesome Creative Agency
        </h1>
        <p className='description'>
        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
        </p>
        <ButtonOutline className='button'>LEARN MORE</ButtonOutline>
      </Col>
    </Row>
  </Container>
</section>
  );
};

export default Main;
