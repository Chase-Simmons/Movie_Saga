// Used to store a movie's details returned from the server
const movieDetails = (state = { genres: [] }, action) => {
  switch (action.type) {
    case 'SET_MOVIE_DETAILS':
      return action.payload;
    default:
      return state;
  }
};

export default movieDetails;
