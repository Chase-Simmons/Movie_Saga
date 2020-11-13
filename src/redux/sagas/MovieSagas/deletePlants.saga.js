import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deletePlants(action) {
  try {
    yield axios.delete(`api/plant/${action.payload}`);
    yield put({
      type: 'GET_PLANTS',
    });
  } catch (err) {
    console.log(err);
  }
}

function* deletePlantsSaga() {
  yield takeLatest('DELETE_PLANTS', deletePlants);
}

export default deletePlantsSaga;
