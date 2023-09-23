import React, { Component } from "react";
import "./NewsArticle.css"; // Import your CSS file

class NewsArticle extends Component {
  render() {
    return (
      <div className="news-article-wrapper">
        <div className="news-article">
          <div className="news-article__image">
            <img src={this.props.image} alt={this.props.title} />
          </div>
          <div className="news-article__content">
            <h2>{this.props.title}</h2>
            <p>{this.props.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsArticle;
