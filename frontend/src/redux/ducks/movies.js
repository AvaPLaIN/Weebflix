//! CONSTANTS
export const ALL_MOVIES_FETCH = 'redux/movies/ALL_MOVIES_FETCH';
export const ALL_MOVIES_SUCCESS = 'redux/movies/ALL_MOVIES_SUCCESS';

//! INIT
const initialState = {
  movies: undefined,
};

//! REDUCERS
const reducer = (state = initialState, action) => {
  const { movies } = action;

  switch (action.type) {
    case ALL_MOVIES_SUCCESS:
      return { ...state, movies };

    default:
      return state;
  }
};

//! ACTIONS
export const getAllMovies = (jwt) => ({
  type: ALL_MOVIES_FETCH,
  jwt,
});

export const setAllMovies = (movies) => ({
  type: ALL_MOVIES_SUCCESS,
  movies,
});

//! EXPORT
export default reducer;
