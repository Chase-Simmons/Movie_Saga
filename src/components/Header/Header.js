import React, { Component } from 'react';
import { connect } from 'react-redux';

// -> IMPORT COMPONENT <-- \\
// -> IMPORT COMPONENT <-- \\

class Header extends Component {
  onClickLink = (link) => (event) => {
    this.props.dispatch({ type: 'CLEAR_MOVIE_DETAILS' });
    this.props.history.push(link);
  };

  render() {
    console.log(this.props);
    return (
      <div className="App-header">
        <nav className="header-nav">
          <div className="header-block">
            <p className="nav-item" onClick={this.onClickLink('/')}>
              HOME
            </p>
            <h1 className="nav-item">MOVIE WEBPAGE</h1>
            <p className="nav-item" onClick={this.onClickLink('/add-movie')}>
              ADD MOVIE
            </p>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(Header);
