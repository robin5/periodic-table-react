import React from "react";
import { render } from "react-dom";
import "./Element.css";

class Element extends React.Component {
  state = {
    element: "",
  };

  constructor(props) {
    super(props);
    this.state.element = props.element;
    console.log(typeof props.element);
  }
  shells = (arr) => {
    return arr.join();
  };

  render() {
    return (
      <div className="table-element">
        {this.state.element === "" ? (
          <div className="element-undefined">blank</div>
        ) : (
          <div className="element">
            <span className="element-number">{this.state.element.number}</span>
            <span className="element-symbol">{this.state.element.symbol}</span>
            <span className="element-name">{this.state.element.name}</span>
            <span className="element-atomic-mass">
              {typeof this.state.element.atomic_mass !== "number"
                ? ""
                : this.state.element.atomic_mass.toFixed(3)}
            </span>
            <span className="element-shells">
              {Array.isArray(this.state.element.shells)
                ? this.state.element.shells.join("-")
                : ""}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default Element;
