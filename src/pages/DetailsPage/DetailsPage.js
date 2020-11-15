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
  // onClickEdit = () => {
  //   this.props.dispatch({ type: 'CLEAR_MOVIE_DETAILS' });
  //   this.props.history.push(`/edit-movie/${this.props.store.movieDetails.id}`);
  // };
  render() {
    const imageBlockBackground = {
      backgroundImage: `url(${this.props.store.movieDetails.poster})`,
    };

    return (
      <div className="space-from-header">
        <div className="movie-item-details-block">
          <div className="details-image-block">
            <div
              className="details-image-block-background"
              style={imageBlockBackground}
            />
            <div>
              <img
                className="details-main-image"
                src={this.props.store.movieDetails.poster}
                alt={this.props.store.movieDetails.title}
              />
            </div>
          </div>
          <br />
          <br />
          <div className="button-box">
            <button onClick={this.onClickBack}>Back</button>
          </div>
          <br />
          <div>
            <h3>{this.props.store.movieDetails.title}</h3>
            <p className="movie-description">
              {this.props.store.movieDetails.description}
            </p>
          </div>
          <div>
            <h3>Genres</h3>
            {this.props.store.movieDetails.genres.map((item, index) => (
              <span key={index}>{`${item}, `}</span>
            ))}
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
