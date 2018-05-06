import React from "react";

import MoviesList from "./MoviesList";
import MoviesTabs from "./MoviesTabs";

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

  changeTab = tab => {
    this.setState({
      type: tab
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("oldstate ShouldComp");
    console.log("oldstate ShouldComp", this.state);
    console.log("newstate ShouldComp", nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("oldstate WillUpdate");
    console.log("oldstate WillUpdate", this.state);
    console.log("newstate WillUpdate", nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("oldstate DidUpdate");
    console.log("oldstate DidUpdate", prevProps);
    console.log("newstate DidUpdate", prevState);
  }

  render() {
    const { likeCounts } = this.state;
    // console.log("AppRender");
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <LikeCounts likeCounts={likeCounts} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-4">
              <MoviesTabs type={this.state.type} changeTab={this.changeTab} />
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
