import React, { Component } from 'react';
import { connect } from 'react-redux';

// -> IMPORT COMPONENT <- \\
// -> IMPORT COMPONENT <- \\

class AddMoviePage extends Component {
  onClickCancel = () => {
    this.props.dispatch({ type: 'CLEAR_MOVIE_DETAILS' });
    this.props.history.push('/');
  };

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
          <input placeholder="image path"></input>
          <br />
          <div>
            <h3>{this.props.store.movieDetails.title}</h3>
            <p>{this.props.store.movieDetails.description}</p>
          </div>
          <div>
            {this.props.store.movieDetails.genres.map((item, index) => (
              <span key={index}>{item} </span>
            ))}
          </div>
          <br />
          <br />
          <div className="button-box">
            <button onClick={this.onClickCancel}>Submit</button>
            <button onClick={this.onClickCancel}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(AddMoviePage);
