import React from "react";

import MoviesList from "./MoviesList";

function LikeCounts({ likeCounts }) {
  return <p>Количество лайков: {likeCounts} </p>;
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      likeCounts: 0,
      type: "now_playing"
    };
  }

  increaseLike = () => {
    // console.log("increase like");
    this.setState({
      likeCounts: this.state.likeCounts + 1
    });
  };

  decreaseLike = () => {
    // console.log("decrease like");
    this.setState({
      likeCounts: this.state.likeCounts - 1
    });
  };

  render() {
    const { likeCounts } = this.state;
    // console.log("AppRender");
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <LikeCounts likeCounts={likeCounts} />
            </div>
          </div>
          <MoviesList
            type={this.state.type}
            increaseLike={this.increaseLike}
            decreaseLike={this.decreaseLike}
          />
        </div>
      </div>
    );
  }
}

export default App;
