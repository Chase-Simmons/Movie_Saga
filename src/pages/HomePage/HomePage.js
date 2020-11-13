import React, { Component } from 'react';
import { connect } from 'react-redux';

// -> IMPORT COMPONENT <- \\
import MovieList from '../../components/MovieList/MovieList';
// -> IMPORT COMPONENT <- \\

class HomePage extends Component {
  getDetails = (item) => (event) => {
    this.props.history.push(`/details/${item.id}`);
  };
  render() {
    return <MovieList getDetails={this.getDetails} />;
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(HomePage);
