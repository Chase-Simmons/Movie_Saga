import { combineReducers } from 'redux';

// -> REDUCERS <- \\
import movies from './movies.reducer';
import genres from './genres.reducer';
import movieDetails from './movieDetails.reducer';
// -> REDUCERS <- \\

const reducers = combineReducers({
  movies,
  genres,
  movieDetails,
});

export default reducers;
