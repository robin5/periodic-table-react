// **********************************************************************************
// * Copyright (c) 2020 Robin Murray
// **********************************************************************************
// *
// * File: PeriodicTable.js
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
