import React from "react";
import "./Team.sass";
import Container from "react-bootstrap/Container";
import ButtonOutline from "../Button/Button";
import TeamMember from "./TeamMember";

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
    <section id="team" className="block team-block">
      <Container fluid>
        <div className="team_title_holder">
          <h2>MEET OUR AMAZING TEAM</h2>
          <div className="top_subtitle">
            Lorem ipsum dolor sit amet proin gravida nibh vel velit
          </div>
        </div>
        <div className="teamList">
          {teamData.map(({ id, icon, name, specialization, link }) => (
            <TeamMember
              key={id}
              icon={icon}
              name={name}
              specialization={specialization}
              link={link}
            />
          ))}
        </div>
        <div className="title-holder">
          <h6 className="bot_subtitle">
            Become part of our dream team, let’s join us !
          </h6>
        </div>
        <ButtonOutline className="team_button">WE ARE HIRING</ButtonOutline>
      </Container>
    </section>
  );
};

export default Team;