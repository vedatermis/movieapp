import React from "react";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import { Grid } from "semantic-ui-react";
import { HashLoader } from 'react-spinners';

const MoviesList = ({ movies, deleteMovie }) => {
    const emptyMessage = (
        <p>
            There are no movies
        </p>
    );

    const movieList = (
        <div>
        <HashLoader color = { '#123abc' } loading = { movies.fetching } />
            {
                movies.error.response ?
                    <h3>Error</h3> :
                    <Grid stackable columns = { 3 }>
                        {
                            movies.movieList.map(movie =>
                                <MovieCard key={ movie._id } movie={ movie } deleteMovie = { deleteMovie }/>
                            )
                        }
                    </Grid>
            }

        </div>
    );

    return (
        <div>
            {
                movies.length === 0 ? (emptyMessage) : (movieList)
            }
        </div>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.shape({
        movieList: PropTypes.array.isRequired
    }).isRequired
};

export default MoviesList;