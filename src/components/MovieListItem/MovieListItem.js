import React from 'react';
import './MovieListItem.css';

function MovieListItem(props) {
  return (
    <div className="movie-item-block">
      <div className="img-block">
        <img src={props.item.poster} />
      </div>
      <div className="details-block">
        <h3>{props.item.title}</h3>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}

export default MovieListItem;
