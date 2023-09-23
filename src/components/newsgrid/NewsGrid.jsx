import React, { Component } from "react";
import "./NewsGrid.css";

class NewsGrid extends Component {
  render() {
    return <div className="two-column-layout">{this.props.children}</div>;
  }
}

export default NewsGrid;
