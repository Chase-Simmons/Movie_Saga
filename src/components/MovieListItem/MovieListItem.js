import React from 'react';

function MovieListItem(props) {
  return (
    <div>
      <img src={props.item.poster} />
    </div>
  );
}

export default MovieListItem;
