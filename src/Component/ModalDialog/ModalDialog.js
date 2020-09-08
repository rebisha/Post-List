import React from "react";
import { Button, Modal } from "react-bootstrap";

import "./modalDialog.scss";

const ModalDialog = ({ body, handleClose, show, title }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Dialog className="modalDialog">
        <Modal.Header closeButton className="modalDialog-header">
          <Modal.Title className="modalDialog-title">{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modalDialog-body">
          <p className="modalDialog-text">{body}</p>
        </Modal.Body>

        <Modal.Footer className="modalDialog-footer">
          <Button
            variant="secondary"
            className="modalDialog-button"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default ModalDialog;
