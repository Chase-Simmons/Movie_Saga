import React from 'react';
import './MovieListItem.css';

function MovieListItem(props) {
  return (
    <div className="movie-item-block" onClick={props.onClick(props.item)}>
      <div className="img-block">
        <img src={props.item.poster} alt={props.item.title} />
      </div>
      <div className="details-block">
        <h3>{props.item.title}</h3>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}

export default MovieListItem;
