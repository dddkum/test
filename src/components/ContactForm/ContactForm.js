import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ContactForm.sass";

const ContactForm = () => {
  return (
    <Row className="justify-content-center">
      <Col sm={6} className="text-center">
        <div className="text-center">
          <h2 className="forms_title">GIVE US A GOOD NEWS</h2>
        </div>
        <Form>
          <Form.Group controlId="formName">
            <Form.Control
              className="inputs"
              type="text"
              placeholder="Enter your name"
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Control
              className="inputs"
              type="email"
              placeholder="Enter your email"
            />
          </Form.Group>

          <Form.Group controlId="formSubject">
            <Form.Control
              className="inputs"
              type="text"
              placeholder="Enter the subject"
            />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Control
              className="inputs"
              as="textarea"
              rows={6}
              placeholder="Your Message"
            />
          </Form.Group>

          <Button variant="primary" className="submit_form">
            SUBMIT
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default ContactForm;
