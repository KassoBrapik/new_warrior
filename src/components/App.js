import React from "react";
import MovieItem from "./MovieItem";
import { API_KEY_3 } from "../utils";

function LikeCounts({ likeCounts }) {
  return <p>Количество лайков: {likeCounts} </p>;
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      likeCounts: 0,
      isLoading: true
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

  componentDidMount() {
    const link = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY_3}&language=en-US&region=ru&page=1`;

    setTimeout(() => {
      fetch(link)
        .then(response => {
          // console.log("response", response);
          return response.json();
        })
        .then(data => {
          // console.log("data", data.results);
          this.setState({
            movies: data.results,
            isLoading: false
          });
        });
    }, 3000);
  }

  render() {
    const { movies, likeCounts } = this.state;
    console.log("render");
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <LikeCounts likeCounts={likeCounts} />
            </div>
          </div>
          <div className="row">
            {this.state.isLoading ? (
              <p>...Downloading</p>
            ) : (
              movies.map((movie, index) => {
                return (
                  <div key={index} className="col-6 mb-4">
                    <MovieItem
                      item={movie}
                      increaseLike={this.increaseLike}
                      decreaseLike={this.decreaseLike}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
