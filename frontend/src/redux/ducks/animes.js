//! CONSTANTS
export const ALL_ANIMES_FETCH = 'redux/animes/ALL_ANIMES_FETCH';
export const ALL_ANIMES_SUCCESS = 'redux/animes/ALL_ANIMES_SUCCESS';
export const GENRES_ANIMES_FETCH = 'redux/animes/GENRES_ANIMES_FETCH';
export const GENRES_ANIMES_SUCCESS = 'redux/animes/GENRES_ANIMES_SUCCESS';
export const RANDOM_ANIME_FETCH = 'redux/animes/RANDOM_ANIME_FETCH';
export const RANDOM_ANIME_SUCCESS = 'redux/animes/RANDOM_ANIME_SUCCESS';
export const PROGRESS_ANIMES_FETCH = 'redux/animes/PROGRESS_ANIMES_FETCH';
export const PROGRESS_ANIMES_SUCCESS = 'redux/animes/PROGRESS_ANIMES_SUCCESS';
export const FILTER_BY_TITLE_ANIMES_FETCH =
  'redux/animes/FILTER_BY_TITLE_ANIMES_FETCH';
export const FILTER_BY_TITLE_ANIMES_SUCCESS =
  'redux/animes/FILTER_BY_TITLE_ANIMES_SUCCESS';

//! INIT
const initialState = {
  allAnimes: undefined,
  progressAnimes: undefined,
  genreAnimes: undefined,
  randomAnime: undefined,
  filteredByTitleAnimes: undefined,
};

//! REDUCERS
const reducer = (state = initialState, action) => {
  const {
    allAnimes,
    genreAnimes,
    randomAnime,
    progressAnimes,
    filteredByTitleAnimes,
  } = action;

  switch (action.type) {
    case ALL_ANIMES_FETCH:
      return state;

    case ALL_ANIMES_SUCCESS:
      return { ...state, allAnimes };

    case GENRES_ANIMES_SUCCESS:
      return { ...state, genreAnimes };

    case RANDOM_ANIME_SUCCESS:
      return { ...state, randomAnime };

    case PROGRESS_ANIMES_SUCCESS:
      return { ...state, progressAnimes };

    case FILTER_BY_TITLE_ANIMES_SUCCESS:
      return { ...state, filteredByTitleAnimes };

    default:
      return state;
  }
};

//! ACTIONS

//? ALL ANIMES
export const getAllAnimes = (jwt) => ({
  type: ALL_ANIMES_FETCH,
  jwt,
});

export const setAllAnimes = (allAnimes) => ({
  type: ALL_ANIMES_SUCCESS,
  allAnimes,
});

//? GENRE ANIMES
export const getGenresAnimes = (jwt, genres) => ({
  type: GENRES_ANIMES_FETCH,
  jwt,
  genres,
});

export const setGenresAnimes = (genreAnimes) => ({
  type: GENRES_ANIMES_SUCCESS,
  genreAnimes,
});

//? RANDOM ANIME
export const getRandomAnime = (jwt) => ({
  type: RANDOM_ANIME_FETCH,
  jwt,
});

export const setRandomAnime = (randomAnime) => ({
  type: RANDOM_ANIME_SUCCESS,
  randomAnime,
});

//? PROGRESS ANIMES
export const getProgressAnimes = (jwt, progress) => ({
  type: PROGRESS_ANIMES_FETCH,
  jwt,
  progress,
});

export const setProgressAnimes = (progressAnimes) => ({
  type: PROGRESS_ANIMES_SUCCESS,
  progressAnimes,
});

export const getFilteredByTitleAnimes = (jwt, filter) => ({
  type: FILTER_BY_TITLE_ANIMES_FETCH,
  jwt,
  filter,
});

export const setFilteredByTitleAnimes = (filteredByTitleAnimes) => ({
  type: FILTER_BY_TITLE_ANIMES_SUCCESS,
  filteredByTitleAnimes,
});

//! EXPORT
export default reducer;
