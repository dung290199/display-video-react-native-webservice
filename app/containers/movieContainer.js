import {connect} from 'react-redux'
import MovieComponent from '../components/movieComponents';
import {fetchMoviesAction,fetchFailedAction,fetchSuccessAction,addMovieAction} from "../actions";

//connect redux to movieComponent
const mapStateToProps = (state) => {
    return {
        movies: state.movieReducers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMovies : () => {
            dispatch(fetchMoviesAction());
        },
    }
};

const MovieContainer = connect(mapStateToProps,mapDispatchToProps)(MovieComponent);
export default MovieContainer;