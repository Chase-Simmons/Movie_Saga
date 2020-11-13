import { all } from 'redux-saga/effects';

// -> SAGAS <- \\
/*------------------> MOVIES <------------------*/
/*    */ import getMovies from './MovieSagas/getMovies.saga';
/*    */ import postMovies from './MovieSagas/postMovies.saga';
/*    */ import deleteMovies from './MovieSagas/deleteMovies.saga';
/*    */ import getMoviesDetails from './MovieSagas/getMoviesDetails.saga';
/*    */ import clearMoviesDetails from './MovieSagas/clearMoviesDetails.saga';
/*------------------> MOVIES <------------------*/
/*------------------> GENRES <------------------*/
/*    */ import getGenres from './GenreSagas/getGenres.saga';
/*------------------> GENRES <------------------*/
// -> SAGAS <- \\

function* rootSaga() {
  yield all([
    getMovies(),
    postMovies(),
    deleteMovies(),
    getMoviesDetails(),
    clearMoviesDetails(),
    getGenres(),
  ]);
}

export default rootSaga;
