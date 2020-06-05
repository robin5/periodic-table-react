import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class ElementModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      element: false,
    };
  }

  state = { show: false };

  handleClose = () => {
    this.setState({ show: false, element: false });
  };

  handleShow = () => {
    this.setState({ show: true, element: this.props.element });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.element === false && this.props.element !== false) {
      this.handleShow();
    }
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {this.props.element ? this.props.element.name : ""}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ElementModal;
