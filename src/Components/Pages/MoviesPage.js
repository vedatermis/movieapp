import React, { Component } from 'react'
import { connect } from "react-redux";
import MovieList from "../MovieList";
import { fetchMovies, deleteMovie } from "../../Actions/movies";

class MoviesPage extends Component {
  
  componentDidMount = () => {
    this.props.fetchMovies();
  };

  render() {
    return (
      <div>
        Movies
        <MovieList 
        movies = { this.props.movies }
        deleteMovie = { this.props.deleteMovie }
        />
      </div>
    )
  }
}

const mapDispatchToProps = {
  fetchMovies,
  deleteMovie
};


const mapStateToProps = state => {
  return {
    movies: state.movies
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);