import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postPlants(action) {
  try {
    yield axios.post(`/api/plant`, action.payload);

    yield put({
      type: 'GET_PLANTS',
    });
  } catch (err) {
    console.log(err);
  }
}

function* postPlantsSaga() {
  yield takeLatest('POST_PLANTS', postPlants);
}

export default postPlantsSaga;
