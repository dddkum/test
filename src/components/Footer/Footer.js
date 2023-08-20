import React from "react";
import "./Footer.sass";
import { Row, Col, Container } from "react-bootstrap";
import {
  logo,
  addressFooterIcon,
  callFooterIcon,
  image,
  facebook,
  google,
  instagram,
  twitter,
  unknown,
  youtube,
} from "./FooterAssets";

const Footer = () => {
  return (
    <section id="footer">
      <Container>
        <Row className="contacts_block">
          <Col lg={4} className="text-start">
            <img src={logo} alt="logo" />
            <p className="logo">
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh elit. Duis sed odio sit amet auctror a ornare
              odio non mauris vitae erat in elit
            </p>
          </Col>
          <Col lg={4}>
            <div className="address_title">OUR STUDIO</div>
            <div className="address_footer_block">
              <img src={addressFooterIcon} alt="address" />
              <p>
                Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres -
                Jakarta Barat 11480 - Indonesia
              </p>
            </div>
            <div className="address_footer_phone">
              <img src={callFooterIcon} alt="address" />
              <a href="tel:+622122243333">(+62) 21-2224 3333</a>
            </div>
          </Col>
          <Col lg={4}>
            <div className="address_title">STAY IN TOUCH</div>
            <div className="footer_contacts_block">
              <input
                type="text"
                placeholder="Subscribe our newsletter"
                className="input-subscribe"
              />
              <button
                className="button-subscribe"
                style={{ backgroundImage: `url(${image})` }}
              ></button>
            </div>
            <div className="footer_contacts">
              <img src={facebook} alt="address" />
              <img src={twitter} alt="address" />
              <img src={unknown} alt="address" />
              <img src={instagram} alt="address" />
              <img src={google} alt="address" />
              <img src={youtube} alt="address" />
            </div>
          </Col>
        </Row>
        <Row className="footer_nav">
          <Col md={1} className="text-start">
            <p>HELP</p>
          </Col>
          <Col md={2} className="text-start">
            <p>TERMS & CONDITION</p>
          </Col>
          <Col md={1} className="text-start">
            <p>PRIVACY</p>
          </Col>
          <Col md={4} className="" />
          <Col md={3} className="text-start">
            <p style={{ textAlign: "start" }}>
              Copyright © 2015 - Tajem Creative
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
