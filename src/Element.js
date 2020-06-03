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
    // console.log(typeof props.element);
  }
  shells = (arr) => {
    return arr.join();
  };

  CategoryClass = (category) => {
    switch (category) {
      case "diatomic nonmetal":
        return "element-diatomic-nonmetal";
      case "polyatomic nonmetal":
        return "element-polyatomic-nonmetal";
        case "metalloid":
          return "element-metalloid";
      case "noble gas":
        return "element-noble-gas";
      case "alkali metal":
        return "element-alkali-metal";
      case "alkaline earth metal":
        return "element-alkaline-earth-metal";
      case "transition metal":
        return "element-transition-metal";
      case "post-transition metal":
        return "element-post-transition-metal";
      case "lanthanide":
        return "element-lanthanide";
      case "actinide":
        return "element-actinide";
      default:
        return "element-unknown";
    }
  };

  render() {
    return (
      <div className="table-element">
        {this.state.element === "" ? (
          <div className="element-undefined">blank</div>
        ) : (
          <div className={this.CategoryClass(this.state.element.category)}>
            <a href={this.state.element.source} className="element-anchor" target="_about">
              <span className="element-number">
                {this.state.element.number}
              </span>
              <span className="element-symbol">
                {this.state.element.symbol}
              </span>
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
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default Element;
