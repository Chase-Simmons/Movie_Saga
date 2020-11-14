import React, { Component } from 'react';
import { connect } from 'react-redux';

// -> IMPORT COMPONENT <- \\
// -> IMPORT COMPONENT <- \\

class AddMoviePage extends Component {
  state = {
    movieForm: {
      image: '',
      title: '',
      description: '',
      genres: [],
    },
    genreToAdd: '',
  };

  onFormChange = (key) => (event) => {
    if (key === 'genreToAdd') {
      this.setState({ ...this.state, [key]: event.target.value });
    } else {
      this.setState({
        ...this.state,
        movieForm: {
          ...this.state.movieForm,
          [key]: event.target.value,
        },
      });
    }
    console.log(this.state);
  };

  onClickCancel = () => {
    this.props.dispatch({ type: 'CLEAR_MOVIE_DETAILS' });
    this.props.history.push('/');
  };

  onClickAddGenre = () => {
    if (this.state.genreToAdd === '') {
      alert('please fill out genre before adding!');
    } else {
      this.setState({
        movieForm: {
          ...this.state.movieForm,
          genres: [...this.state.movieForm.genres, this.state.genreToAdd],
        },
        genreToAdd: '',
      });
    }
  };
  render() {
    const imageBlockBackground = {
      backgroundImage: `url(${this.state.movieForm.image})`,
    };

    return (
      <div className="space-from-header">
        <div className="add-movie-item-details-block">
          <div className="details-image-block">
            <div
              className="details-image-block-background"
              style={imageBlockBackground}
            />
            <div>
              <img
                className="details-main-image"
                src={this.state.movieForm.image}
                alt={this.state.movieForm.title}
              />
            </div>
          </div>
          <br />
          <input
            placeholder="Image Path"
            onChange={this.onFormChange('image')}
            value={this.state.movieForm.image}
          />
          <br />
          <div>
            <h3>{this.state.movieForm.title}</h3>
            <input
              placeholder="Title Name"
              onChange={this.onFormChange('title')}
              value={this.state.movieForm.title}
            />
            <p>{this.state.movieForm.description}</p>
          </div>
          <input
            placeholder="Movie Description"
            onChange={this.onFormChange('description')}
            value={this.state.movieForm.description}
          />
          <br />
          <br />
          <div>
            {this.state.movieForm.genres.map((item, index) => (
              <span key={index}>{`${item}, `}</span>
            ))}
            <br />
            <input
              placeholder="Genre Name"
              onChange={this.onFormChange('genreToAdd')}
              value={this.state.genreToAdd}
            ></input>
            <button onClick={this.onClickAddGenre}>Add Genre</button>
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
