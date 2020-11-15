import React from 'react';
import './MovieListItem.css';

function MovieListItem(props) {
  return (
    <div className="movie-item-block" onClick={props.onClicker(props.item)}>
      <div className="img-block">
        <img
          className="list-image"
          src={props.item.poster}
          alt={props.item.title}
        />
      </div>
      {/* <div className="details-block">
        
        <p>{props.item.description}</p>
      </div> */}
    </div>
  );
}

export default MovieListItem;
