import { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { appContext } from "../../context/AppContext";

export default function FaireUnDonDetails() {
  const { show, title, content, theme, setShow } = useContext(appContext);
  return (
    <>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        centered
      >
        <Modal.Header closeButton style={{ backgroundColor: theme }}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
      </Modal>
    </>
  );
}
