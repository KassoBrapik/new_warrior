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
            className={type === "now_playing" ? "nav-link active" : "nav-link"}
          >
            Now playing
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">Upcoming</div>
        </li>
        <li className="nav-item">
          <div className="nav-link">Popular</div>
        </li>
      </ul>
    );
  }
}

export default MoviesTabs;
