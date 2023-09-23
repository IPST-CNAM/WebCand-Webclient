import "./NewsFeed.css";
import React, { Component } from "react";

class NewsFeed extends Component {
  render() {
    return (
      <div className="news-feed-wrapper">
        <div className="news-feed">{this.props.children}</div>
      </div>
    );
  }
}

export default NewsFeed;
