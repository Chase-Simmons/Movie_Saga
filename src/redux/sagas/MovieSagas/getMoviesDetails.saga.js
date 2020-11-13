import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getMoviesDetails(action) {
  try {
    const response = yield axios.get(`api/movie/details/${action.payload}`);
    yield put({
      type: 'SET_MOVIE_DETAILS',
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
}

function* getMoviesDetailsSaga() {
  yield takeLatest('GET_MOVIE_DETAILS', getMoviesDetails);
}

export default getMoviesDetailsSaga;
