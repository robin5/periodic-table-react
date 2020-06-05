import React from "react";
import "./PeriodicTable.css";
import Element from "./Element.js";
import * as ElementData from "./PeriodicTableData";
import ElementModal from "./ElementModal";

class PeriodicTable extends React.Component {
  state = {
    table: [],
    currentElement: false,
  };

  componentDidMount() {
    this.setState(() => {
      const table = [];
      for (let i = 0; i < 198; ++i) {
        table.push("");
      }

      const elements = ElementData.elements;
      for (let i = 0; i < elements.length; ++i) {
        table[this.getElementIndex(elements[i])] = elements[i];
      }

      return { table: table };
    });
  }

  getElementIndex = (element) => {
    let index;
    if (element.number >= 57 && element.number <= 71) {
      index = (element.ypos - 1) * 18 + (element.xpos - 1) + 18;
    } else if (element.number >= 89 && element.number <= 103) {
      index = (element.ypos - 1) * 18 + (element.xpos - 1) + 18;
    } else {
      index = (element.ypos - 1) * 18 + (element.xpos - 1);
    }
    return index;
  };

  onShowDetail = (element) => {
    this.setState({ currentElement: element });
  };

  render() {
    return (
      <div className="Board-outer-wrapper">
        <div className="Board-inner-wrapper flex-container">
          {this.state.table.map((element, index) => {
            return (
              <Element
                key={index}
                element={element}
                onShowDetail={this.onShowDetail}
              />
            );
          })}
        </div>
        <ElementModal element={this.state.currentElement} />
      </div>
    );
  }
}

export default PeriodicTable;
