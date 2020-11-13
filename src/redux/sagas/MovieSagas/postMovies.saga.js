import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postMovies(action) {
  try {
    yield axios.post(`/api/movie`, action.payload);

    yield put({
      type: 'GET_MOVIES',
    });
  } catch (err) {
    console.log(err);
  }
}

function* postMoviesSaga() {
  yield takeLatest('POST_MOVIES', postMovies);
}

export default postMoviesSaga;
