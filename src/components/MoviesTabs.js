import React, { Component } from "react";

class MoviesTabs extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { type } = this.props;

    return (
      <ul className="tabs nav nav-pills">
        <li className="nav-item">
          <div
            onClick={() => {
              this.props.changeTab("now_playing");
            }}
            className={type === "now_playing" ? "nav-link active" : "nav-link"}
          >
            Now playing
          </div>
        </li>
        <li className="nav-item">
          <div
            onClick={() => {
              this.props.changeTab("upcoming");
            }}
            className={type === "upcoming" ? "nav-link active" : "nav-link"}
          >
            Upcoming
          </div>
        </li>
        <li className="nav-item">
          <div
            onClick={() => {
              this.props.changeTab("popular");
            }}
            className={type === "popular" ? "nav-link active" : "nav-link"}
          >
            Popular
          </div>
        </li>
      </ul>
    );
  }
}

export default MoviesTabs;
