import React, { Component } from 'react'
import { connect } from "react-redux";
import MovieList from "../MovieList";
import { fetchMovies } from "../../Actions/movies";

class MoviesPage extends Component {
  
  componentDidMount = () => {
    this.props.fetchMovies();
  };

  render() {
    return (
      <div>
        Movies
        <MovieList movies = { this.props.movies }/>
      </div>
    )
  }
}

const mapDispatchToProps = {
  fetchMovies
};


const mapStateToProps = state => {
  return {
    movies: state.movies
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);