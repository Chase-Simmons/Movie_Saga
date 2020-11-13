import { all } from 'redux-saga/effects';

// -> SAGAS <- \\
// -> SAGAS <- \\

// Create the rootSaga generator function
function* rootSaga() {
  yield all([]);
}

export default rootSaga;
