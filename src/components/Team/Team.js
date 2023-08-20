import React from "react";
import "./Team.sass";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonOutline from "../Button/Button";

const teamData = [
  {
    id: 1,
    name: "SEMF UCUK",
    icon: require("../../assets/images/team_icon.png"),
    specialization: "CEO & FOUNDER",
    link: "/semf",
  },
  {
    id: 2,
    name: "DIK ADALIN",
    icon: require("../../assets/images/team_icon.png"),
    specialization: "ENGINEERING",
    link: "dik",
  },
  {
    id: 3,
    name: "JENG KOL",
    icon: require("../../assets/images/team_icon.png"),
    specialization: "DESIGNER",
    link: "jeng",
  },
  {
    id: 4,
    name: "PET ROMAK",
    icon: require("../../assets/images/team_icon.png"),
    specialization: "MARKETING",
    link: "pet",
  },
];

const Team = () => {
  return (
    <section id="team" className="block team-block text-center">
      <Container fluid>
        <div className="team_title_holder">
          <h2 className="text-center">MEET OUR AMAZING TEAM</h2>
          <div className="top_subtitle text-center">
            Lorem ipsum dolor sit amet proin gravida nibh vel velit
          </div>
        </div>
        <Row className="teamList">
          {teamData.map((team) => {
            return (
              <Col xs={6} md={3} key={team.id}>
                <div className="team-wrapper text-center">
                  <a href={team.link}>
                    <img src={team.icon} alt="icon" className="team_icon" />
                    <div className="label text-center">
                      <h3>{team.name}</h3>
                      <p>{team.specialization}</p>
                    </div>
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
        <div className="title-holder">
          <h6 className="bot_subtitle text-center">
            Become part of our dream team, let’s join us !
          </h6>
        </div>
        <ButtonOutline className="team_button">WE ARE HIRING</ButtonOutline>
      </Container>
    </section>
  );
};

export default Team;
