import { all } from 'redux-saga/effects';

// -> SAGAS <- \\
import getMovies from './MovieSagas/getMovies.saga';
// -> SAGAS <- \\

// Create the rootSaga generator function
function* rootSaga() {
  yield all([getMovies()]);
}

export default rootSaga;
