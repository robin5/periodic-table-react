import React from "react";
import { render } from "react-dom";
import "./PeriodicTable.css";
import Element from "./Element.js";
import * as ElementData from "./PeriodicTableData";

class PeriodicTable extends React.Component {
  state = {
    table: [],
  };

  constructor(props) {
    super(props);
    this.state = { table: [] };
  }

  componentDidMount() {
    this.setState(() => {
      const table = [];
      for (let i = 0; i < 126; ++i) {
        table.push("");
      }

      const elements = ElementData.elements;
      console.log(elements);
      for (let i = 0; i < elements.length; ++i) {
        table[this.getElementIndex(elements[i])] = elements[i];
      }

      return { table: table };
    });
  }

  getElementIndex = (element) => {
    let index = (element.ypos - 1) * 18 + (element.xpos - 1);
    return index;
  };

  render() {
    return (
      <div className="Board-outer-wrapper">
        <div className="Board-inner-wrapper flex-container">
          {this.state.table.map((element, index) => {
            return <Element key={index} element={element} />;
          })}
        </div>
      </div>
    );
  }
}

export default PeriodicTable;
