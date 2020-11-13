import React, { Component } from 'react';
import { connect } from 'react-redux';

// -> IMPORT COMPONENT <-- \\
import MovieListItem from '../MovieListItem/MovieListItem';
// -> IMPORT COMPONENT <-- \\

class MovieList extends Component {
  render() {
    return (
      <div className="space-from-header">
        {this.props.store.movies.map((item, index) => (
          <MovieListItem key={index} item={item} onClick={this.onClick} />
        ))}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(MovieList);
