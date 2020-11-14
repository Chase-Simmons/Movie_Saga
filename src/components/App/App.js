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
    this.props.dispatch({
      type: 'GET_GENRES',
    });
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h1>Movies!</h1>
          </div>
          <main>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/details/:id" component={DetailsPage} />
            <Route exact path="/edit-movie/:id" component={AddMoviesPage} />
          </main>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
