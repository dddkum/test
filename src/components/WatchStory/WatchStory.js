import React, { useState } from "react";
import "./WatchStory.sass";
import background_mid from "../../assets/images/background_mid.png";
import play_button from "../../assets/images/play_icon.png";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";

function VideoModal() {
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="position-relative">
      <Image
        src={background_mid}
        fluid
        className="background_mid img-fluid"
        alt="Background Image"
      />
      <div className="position-absolute top-50 start-50 translate-middle">
        <div
          className="Watch_icon d-flex justify-content-center align-items-center flex-column"
          onClick={handleModalShow}
        >
          <Image
            src={play_button}
            fluid
            className="play_icon img-fluid"
            alt="Play Button"
          />
          <h4 className="text-center text-button">WATCH OUR STORY</h4>
        </div>
      </div>
      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Настоящий Детектив. О религии.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/KvUgaHTNit4"
            title="Настоящий Детектив. О религии."
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default VideoModal;
