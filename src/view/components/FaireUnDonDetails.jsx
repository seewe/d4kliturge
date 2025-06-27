import { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { modalContext } from "./FaireUnDonLien";

export default function FaireUnDonDetails() {
  const { title, content, show, handleClose, theme } = useContext(modalContext);
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton style={{ backgroundColor: theme }}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
      </Modal>
    </>
  );
}
