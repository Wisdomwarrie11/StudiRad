// src/components/CoursePreview.js

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CoursePreview = ({ show, handleClose, content }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Course Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{content}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CoursePreview;
