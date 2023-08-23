import React from "react";

const TeamMember = ({ icon, name, specialization, link }) => (
  <div className="team-wrapper">
    <a href={link}>
      <img src={icon} alt="icon" className="team_icon" />
      <div className="label">
        <h3>{name}</h3>
        <p>{specialization}</p>
      </div>
    </a>
  </div>
);

export default TeamMember;