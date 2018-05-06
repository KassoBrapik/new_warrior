import React, {Component} from "react"

class MoviesList extends Component {
  render(){
    return(
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
    )
  }
}

export default MoviesList

