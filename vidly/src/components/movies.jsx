import React, { Component } from "react";
import { getMovies } from "./../services/fakeMovieService";
class Movies extends Component {
  state = {
    movies: getMovies()
  };
  render() {
    return (
      <React.Fragment>
        {this.displayPageHeader()}
        {this.displayTable()}
      </React.Fragment>
    );
  }

  displayPageHeader() {
    const { length: moviesCount } = this.state.movies;
    let header =
      moviesCount === 0
        ? "There are no movies in the database"
        : "Showing " + moviesCount + " movies in the database";
    return <legend style={{ marginTop: 20 }}>{header}</legend>;
  }
  displayTable() {
    const { length: moviesCount } = this.state.movies;

    return moviesCount === 0 ? null : (
      <table style={{ marginTop: 20 }} className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map(movie => (
            <tr key={movie["_id"]}>
              <td>{movie["title"]}</td>
              <td>{movie.genre["name"]}</td>
              <td>{movie["numberInStock"]}</td>
              <td>{movie["dailyRentalRate"]}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => this.handleDelete(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  handleDelete = movie => {
    console.log("delete movie : " + movie["title"]);
    const filteredMovies = this.state.movies.filter(
      m => m["_id"] !== movie["_id"]
    );
    this.setState({ movies: filteredMovies });
  };
}

export default Movies;
