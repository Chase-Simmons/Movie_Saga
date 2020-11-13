import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteMovies(action) {
  try {
    yield axios.delete(`api/movie/${action.payload}`);
    yield put({
      type: 'GET_MOVIE',
    });
  } catch (err) {
    console.log(err);
  }
}

function* deleteMoviesSaga() {
  yield takeLatest('DELETE_MOVIES', deleteMovies);
}

export default deleteMoviesSaga;
