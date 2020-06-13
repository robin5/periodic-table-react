// **********************************************************************************
// * Copyright (c) 2020 Robin Murray
// **********************************************************************************
// *
// * File: ElementModal.js
// *
// * Author: Robin Murray
// *
// **********************************************************************************
// *
// * Granting License: The MIT License (MIT)
// *
// *   Permission is hereby granted, free of charge, to any person obtaining a copy
// *   of this software and associated documentation files (the "Software"), to deal
// *   in the Software without restriction, including without limitation the rights
// *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// *   copies of the Software, and to permit persons to whom the Software is
// *   furnished to do so, subject to the following conditions:
// *   The above copyright notice and this permission notice shall be included in
// *   all copies or substantial portions of the Software.
// *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// *   THE SOFTWARE.
// *
// **********************************************************************************
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  formatShells,
  googleSearch,
} from "./Utils.js";
import "./ElementModal.css";

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

  googleSearchName = (name) => {
    return typeof name === "string" ? (
      <a
        href={googleSearch(name)}
        target="_about"
        className="element-modal-anchor"
      >
        {name}
      </a>
    ) : null;
  };

  wikipediaReference = (url) => {
    return typeof url === "string" ? (
      <a href={url} target="_about" className="element-modal-anchor">
        See Wikipedia reference
      </a>
    ) : null;
  };

  render() {
    let element = this.props.element;
    let props = Object.keys(element).filter(
      (key) =>
        key !== "name" &&
        key !== "symbol" &&
        key !== "number" &&
        key !== "summary" &&
        key !== "ionization_energies" &&
        key !== "electron_configuration" &&
        key !== "source" &&
        key !== "xpos" &&
        key !== "ypos" &&
        key !== "discovered_by" &&
        key !== "spectral_img" &&
        key !== "shells"
    );

    return (
      <Modal show={this.state.show} onHide={this.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {this.props.element.symbol} - {this.props.element.name} (
            {this.props.element.number})
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <h5>Summary</h5>
            <p>{element.summary}</p>
            <p>{this.wikipediaReference(element.source)}</p>
            <hr />
            <div className="element-modal-section">
              {props.map((key) => (
                <div key={key}>
                  <span className="element-modal-key">
                    {key}:
                    <span className="element-modal-space-after-key">
                      &nbsp;
                    </span>
                  </span>
                  <span>{element[key]}</span>
                </div>
              ))}
            </div>
            <div>
              <span className="element-modal-key">discovered by:</span>
              <span className="element-modal-space-after-key">&nbsp;</span>
              {this.googleSearchName(element.discovered_by)}
              <br />

              <span className="element-modal-key">named by:</span>
              <span className="element-modal-space-after-key">&nbsp;</span>
              {this.googleSearchName(element.named_by)}
              <br />

              <span className="element-modal-key">shells:</span>
              <span className="element-modal-space-after-key">&nbsp;</span>
              <span>{formatShells(element.shells)}</span>
              <br />

              <span className="element-modal-key">spectral image:</span>
              <span className="element-modal-space-after-key">&nbsp;</span>
              {this.wikipediaReference(element.spectral_img)}
              <br />
            </div>

            <span className="element-modal-key">ionization energies:</span>
            <div className="element-modal-long-value">
              <span>{element.ionization_energies}</span>
            </div>

            <span className="element-modal-key">electron configuration:</span>
            <div className="element-modal-long-value">
              <span>
                {typeof element.electron_configuration === "string"
                  ? element.electron_configuration
                      .split(" ")
                      .map((e,i) => <span key={i}>{e}&nbsp;</span>)
                  : null}
              </span>
            </div>
          </div>
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
