import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

// -> IMPORT PAGES <-- \\
import HomePage from '../../pages/HomePage/HomePage';
import DetailsPage from '../../pages/DetailsPage/DetailsPage';
import AddMoviesPage from '../../pages/AddMoviesPage/AddMoviesPage';
// -> IMPORT PAGES <-- \\

class App extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/details" component={DetailsPage} />
          <Route exact path="/add-movies" component={AddMoviesPage} /> */}
        </Router>
        <p>Empty Page</p>
      </div>
    );
  }
}

export default connect()(App);
