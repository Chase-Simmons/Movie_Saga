import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
  render() {
    return (
      <div>
        <p>Hello</p>
        {/* {this.props.store.feedbackList.map((item, index) => (
              <FeedbackListItem
                key={index}
                item={item}
                onClick={this.onClick}
              />
            ))}*/}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(MovieList);
