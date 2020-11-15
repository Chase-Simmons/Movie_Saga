import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddMoviePage.css';

// -> IMPORT COMPONENT <- \\
import swal from 'sweetalert';
// -> IMPORT COMPONENT <- \\

class AddMoviePage extends Component {
  state = {
    movieForm: {
      poster: '',
      title: '',
      description: '',
      genres: [],
      genresId: [],
    },
    genreToAdd: '',
    genreIdToAdd: '',
  };

  /*--------> HANDLES ALL INPUT CHANGES <--------*/
  onFormChange = (key) => (event) => {
    this.setState({
      ...this.state,
      movieForm: {
        ...this.state.movieForm,
        [key]: event.target.value,
      },
    });
  };

  /*--------> HANDLES ALL INPUT CHANGES <--------*/

  /*------------> JSON DEMON SLAYER || AKA UNSTRINGER <------------*/
  JSON_DemonSlayer = () => (event) => {
    if (event.target.value === '0 SelectGenre') {
    } else {
      const demonAshes = event.target.value.split(' '); // demonAshes is splitting the json by any spaces
      const firstHalfOfAshes = demonAshes[0].slice(1); // fixing text
      const secondHalfOfAshes = demonAshes[1].slice(0, -1); // fixing text
      const compiledAshes = [firstHalfOfAshes, secondHalfOfAshes]; // combines both fixed text into new array

      console.log(this.state);

      this.setState({
        ...this.state,
        genreToAdd: compiledAshes[0],
        genreIdToAdd: compiledAshes[1],
      });
    }
  };
  /*------------> JSON DEMON SLAYER <------------*/

  /*-------------> CLICK CATCHERS <--------------*/
  onClickCancel = () => {
    this.props.dispatch({ type: 'CLEAR_MOVIE_DETAILS' });
    this.props.history.push('/');
  };

  onClickAddGenre = () => {
    if (this.state.genreToAdd === '') {
      swal('please fill out genre before adding!');
    } else {
      this.setState({
        movieForm: {
          ...this.state.movieForm,
          genres: [...this.state.movieForm.genres, this.state.genreToAdd],
          genresId: [...this.state.movieForm.genresId, this.state.genreIdToAdd],
        },
        genreToAdd: '',
      });
    }
    console.log(this.state);
  };

  onClickSubmit = () => {
    if (
      this.state.movieForm.poster !== '' &&
      this.state.movieForm.title !== '' &&
      this.state.movieForm.description !== '' &&
      this.state.movieForm.genres !== []
    ) {
      this.props.dispatch({
        type: 'POST_MOVIES',
        payload: this.state.movieForm,
      });
      this.props.history.push('/');
    } else {
      swal('please fill out all fields before submitting!');
    }
  };
  /*-------------> CLICK CATCHERS <--------------*/

  render() {
    const imageBlockBackground = {
      backgroundImage: `url(${this.state.movieForm.poster})`,
    };

    return (
      <div className="space-from-header">
        <div className="add-movie-item-details-block">
          {/*--------> BOTH IMAGE CONTAINERS  <--------*/}
          <div className="details-image-block">
            <div
              className="details-image-block-background"
              style={imageBlockBackground}
            />
            <div>
              <img
                className="details-main-image"
                src={this.state.movieForm.poster}
                alt={this.state.movieForm.title}
              />
            </div>
          </div>
          {/*--------> BOTH IMAGE CONTAINERS  <--------*/}
          <br />
          {/*--------> ALL INPUT FIELDS <--------*/}
          <input
            placeholder="Image Path"
            onChange={this.onFormChange('poster')}
            value={this.state.movieForm.poster}
            className="add-input"
          />
          <br />
          <div>
            <h3>{this.state.movieForm.title}</h3>
            <input
              placeholder="Title Name"
              onChange={this.onFormChange('title')}
              value={this.state.movieForm.title}
              className="add-input"
            />
            <p>{this.state.movieForm.description}</p>
          </div>
          <input
            placeholder="Movie Description"
            onChange={this.onFormChange('description')}
            value={this.state.movieForm.description}
            className="add-input"
          />
          {/*--------> ALL INPUT FIELDS <--------*/}
          <br />
          <br />
          {/*--------> MAPS OUT GENRES AS THEY ARE ADDED <--------*/}
          <div>
            {this.state.movieForm.genres.map((item, index) => (
              <span key={index}>{`${item}, `}</span>
            ))}
            <br />
            {/*--------> MAPS OUT GENRES AS THEY ARE ADDED <--------*/}
            {/*--------> MAPS GENRE REDUCER TO CREATE SELECTOR <--------*/}
            <br />
            <select onChange={this.JSON_DemonSlayer()}>
              {/*--------> look man... i just had to make it work. just uh... look elsewhere. <--------*/}
              <option value="0 SelectGenre">Select Genre</option>
              {this.props.store.genres.map((option) => (
                <option
                  key={option.id}
                  value={JSON.stringify(`${option.name} ${option.id}`)}
                >
                  {option.name}
                </option>
              ))}
              {/*--------> look man... i just had to make it work. just uh... look elsewhere. <--------*/}
            </select>
            {/*--------> MAPS GENRE REDUCER TO CREATE SELECTOR <--------*/}
            {/*--------> DAS IST BUTTONS <--------*/}
            <button onClick={this.onClickAddGenre}>Add Genre</button>
          </div>
          <br />
          <br />
          <div className="button-box">
            <button onClick={this.onClickSubmit}>Submit</button>
            <button onClick={this.onClickCancel}>Cancel</button>
          </div>
          {/*--------> DAS IST BUTTONS <--------*/}
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(AddMoviePage);
