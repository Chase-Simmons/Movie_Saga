import { combineReducers } from 'redux';

// -> REDUCERS <- \\
import movies from './movies.reducer';
import genres from './genres.reducer';
// -> REDUCERS <- \\

const reducers = combineReducers({
  movies,
  genres,
});

export default reducers;
