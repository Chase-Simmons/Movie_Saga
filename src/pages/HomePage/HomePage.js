import React, { Component } from 'react';
import { connect } from 'react-redux';

// -> IMPORT COMPONENT <- \\
import MovieList from '../../components/MovieList/MovieList';
// -> IMPORT COMPONENT <- \\

class HomePage extends Component {
  render() {
    return <MovieList />;
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(HomePage);
