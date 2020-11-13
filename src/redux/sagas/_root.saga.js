import { all } from 'redux-saga/effects';

// -> SAGAS <- \\
/*------------------> MOVIES <------------------*/
/*    */ import getMovies from './MovieSagas/getMovies.saga';
/*    */ import postMovies from './MovieSagas/postMovies.saga';
/*    */ import deleteMovies from './MovieSagas/deleteMovies.saga';
/*------------------> MOVIES <------------------*/
/*------------------> GENRES <------------------*/
/*    */ import getGenres from './GenreSagas/getGenres.saga';
/*------------------> GENRES <------------------*/
// -> SAGAS <- \\

function* rootSaga() {
  yield all([
    /* break-prettier */
    getMovies(),
    postMovies(),
    deleteMovies(),
    getGenres(),
  ]);
}

export default rootSaga;
