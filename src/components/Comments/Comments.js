import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import './Comments.sass';

const employees = [
  {
    id: 1,
    name: "Jane Doe",
    title: "FRONTEND DEVELOPER",
    text: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.",
    image: require("../../assets/images/profile_pic_1.png"),
  },
  {
    id: 2,
    name: "John Smith",
    title: "BACKEND DEVELOPER",
    text: "This is Photoshop's versionmnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn  of Lorem Ipsum.  nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.",
    image: require("../../assets/images/profile_pic_2.png"),
  },
  {
    id: 3,
    name: "JANE GALADRIEL",
    title: "CEO TENGKUREP",
    text: "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.",
    image: require("../../assets/images/profile_pic_3.png"),
  },
  {
    id: 4,
    name: "Karen Chen",
    title: "RECRUITING",
    text: "This is Photoshop's versionsssssssssssssssssssss  of Loremendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.",
    image: require("../../assets/images/profile_pic_4.png"),
  },
  {
    id: 5,
    name: "Mike Brown",
    title: "MARKETING",
    text: "This is Photoshop'sssssssssssssssssssssssstis sem nibh id elit. Duis dddddddddddddddddddddddddddddddddddddsed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.",
    image: require("../../assets/images/profile_pic_5.png"),
  },
];

const smallIconStyle = { width: "45px", height: "45px" };
const largeIconStyle = { width: "72px", height: "72px" };

function Comments() {
  const [activeEmployee, setActiveEmployee] = useState(3);

  const handleIconClick = (employeeId) => {
    setActiveEmployee(activeEmployee === employeeId ? -1 : employeeId);
  };

  return (
    <section id="comments">
    <Container fluid className="employee-title-holder">
      <div className="text-center employee-text">
        <h2>“</h2>
        <p>
          {activeEmployee === -1
            ? "This is Photoshop's version  of Lorem Ipsum."
            : employees.find((employee) => employee.id === activeEmployee).text}
        </p>
      </div>
      <Row className="justify-content-center align-items-center">
        {employees.map(({ id, name, title, image }) => (
          <Col lg={2} key={id} className="employee-col">
            <div className="employee-wrapper text-center align-items-center">
              {activeEmployee === id && (
                <div className="name_title_block">
                <div className="name">
                  {name}
                </div>
                <div className="title">
                  {title}
                </div>
                </div>
              )}
              <Image
                src={image} className='employee_img'
                onClick={() => handleIconClick(id)}
                style={id === activeEmployee ? largeIconStyle : smallIconStyle}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    </section>
  );
}

export default Comments;
