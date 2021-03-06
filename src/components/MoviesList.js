import React, { Component } from "react";
import MovieItem from "./MovieItem";
import { API_KEY_3 } from "../utils";

class MoviesList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true
    };
  }

  componentDidMount() {
    const link = `https://api.themoviedb.org/3/movie/${
      this.props.type
    }?api_key=${API_KEY_3}&language=en-US&region=ru&page=1`;

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
    }, 1000);
  }

  componentWillReceiveProps(nextProps) {
    console.log("WillReceiveProps");
    console.log("old rops", this.props);
    console.log("new rops", nextProps);

    if (nextProps.type != this.props.type) {
      this.setState({
        isLoading: true
      });

      const link = `https://api.themoviedb.org/3/movie/${
        this.props.type
      }?api_key=${API_KEY_3}&language=en-US&region=ru&page=1`;

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
      }, 1000);
    }
  }

  render() {
    const { movies, isLoading } = this.state;
    console.log("render", this.props.type);

    return (
      <div className="row">
        {isLoading ? (
          <p>...Downloading</p>
        ) : (
          movies.map((movie, index) => {
            return (
              <div key={index} className="col-6 mb-4">
                <MovieItem
                  item={movie}
                  increaseLike={this.props.increaseLike}
                  decreaseLike={this.props.decreaseLike}
                />
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default MoviesList;
