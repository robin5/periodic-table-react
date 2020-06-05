import React from "react";
import "./Element.css";

class Element extends React.Component {
  state = {
    element: "",
  };

  constructor(props) {
    super(props);
    this.state.element = props.element;
  }
  shells = (arr) => {
    return arr.join();
  };

  showDetail = () => {
    this.props.onShowDetail(this.props.element);
  };

  CategoryClass = (element) => {
    if (element === "") {
      return "element-undefined";
    }

    let className = "element-inner-wrapper ";
    switch (element.category) {
      case "diatomic nonmetal":
        className += "element-diatomic-nonmetal";
        break;

      case "polyatomic nonmetal":
        className += "element-polyatomic-nonmetal";
        break;

      case "metalloid":
        className += "element-metalloid";
        break;

      case "noble gas":
        className += "element-noble-gas";
        break;

      case "alkali metal":
        className += "element-alkali-metal";
        break;

      case "alkaline earth metal":
        className += "element-alkaline-earth-metal";
        break;

      case "transition metal":
        className += "element-transition-metal";
        break;

      case "post-transition metal":
        className += "element-post-transition-metal";
        break;

      case "lanthanide":
        className += "element-lanthanide";
        break;

      case "actinide":
        className += "element-actinide";
        break;

      default:
        className += "element-unknown";
        break;
    }

    return className;
  };

  render() {
    return (
      <div className="table-element">
        {this.state.element === "" ? (
          <div className={this.CategoryClass(this.state.element)}>
            <span></span>
          </div>
        ) : (
          <div className={this.CategoryClass(this.state.element)}>
            <a
              href={this.state.element.source}
              className="element-anchor"
              target="_about"
              onClick={(e) => {
                e.preventDefault();
                this.showDetail();
              }}
            >
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
