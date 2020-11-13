import { put, takeLatest } from 'redux-saga/effects';

function* clearMoviesDetails(action) {
  try {
    yield put({
      type: 'SET_MOVIE_DETAILS',
      payload: { genres: [] },
    });
  } catch (err) {
    console.log(err);
  }
}

function* clearMoviesDetailsSaga() {
  yield takeLatest('CLEAR_MOVIE_DETAILS', clearMoviesDetails);
}

export default clearMoviesDetailsSaga;
