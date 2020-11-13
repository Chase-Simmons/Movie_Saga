import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DetailsPage.css';

// -> IMPORT COMPONENT <- \\
// -> IMPORT COMPONENT <- \\

class DetailsPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIE_DETAILS',
      payload: this.props.match.params.id,
    });
  }

  onClickBack = () => {
    this.props.dispatch({ type: 'CLEAR_MOVIE_DETAILS' });
    this.props.history.push('/');
  };
  render() {
    console.log(this.props.store.movieDetails.genres);
    return (
      <div className="space-from-header">
        <div className="movie-item-details-block">
          <div className image-block>
            <img
              className="details-main-image"
              src={this.props.store.movieDetails.poster}
              alt={this.props.store.movieDetails.title}
            />
          </div>

          <div className="button-box">
            <button onClick={this.onClickBack}>Back</button>
            <button>Edit</button>
          </div>
          <div>
            {this.props.store.movieDetails.genres.map((item, index) => (
              <span key={index}>{item} </span>
            ))}
          </div>
          <div>
            <h3>{this.props.store.movieDetails.title}</h3>
            <p>{this.props.store.movieDetails.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(DetailsPage);
