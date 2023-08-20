import React from "react";
import "./Expertise.sass";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const expertiseData = [
  {
  id: 1,
  title: "WEB DESIGN & DEVELOPMENT",
  icon: require("../../assets/images/monitor_icon.png"),
  description:
  "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.",
  },
  {
  id: 2,
  title: "BRANDING IDENTITY",
  icon: require("../../assets/images/paintbrush_icon.png"),
  description:
  "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.",
  },
  {
  id: 3,
  title: "MOBILE APP",
  icon: require("../../assets/images/smartphone_icon.png"),
  description:
  "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.",
  },
  {
  id: 4,
  title: "SEARCH ENGINE OPTIMIZATION",
  icon: require("../../assets/images/search_engine_icon.png"),
  description:
  "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.",
  },
  {
  id: 5,
  title: "GAME DEVELOPMENT",
  icon: require("../../assets/images/tetris_icon.png"),
  description:
  "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.",
  },
  {
  id: 6,
  title: "MADE WITH LOVE",
  icon: require("../../assets/images/hearth_icon.png"),
  description:
  "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.",
  },
  ];

function Expertise() {
  return (
    <section id="expertise" className="block expertise-block">
      <Container>
        <div className="title-holder">
          <h2 className="text-center">EXPERTISE</h2>
          <p className="subtitle text-center">
            Lorem ipsum dolor sit amet proin gravida nibh vel velit
          </p>
        </div>
        <Row>
          {expertiseData.map((expertise) => {
            return (
              <Col sm={6} md={4} className="holder text-center" key={expertise.id}>
                <img src={expertise.icon} alt="icon" className="icon" />
                <h3>{expertise.title}</h3>
                <p>{expertise.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Expertise;
