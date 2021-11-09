//! CONSTANTS
export const GET_USER = 'redux/user/get_user';
export const SET_USER = 'redux/user/set_user';
export const LOGIN_USER = 'rexux/user/login';
export const LOGOUT_USER = 'rexux/user/logout';
export const UPDATE_TOKENS = 'redux/user/update_token';
export const UPDATE_TOKENS_SUCC = 'redux/user/update_token_succ';
export const UPDATE_PROGRESS_STATUS = 'redux/user/UPDATE_PROGRESS_STATUS';
export const UPDATE_PROGRESS_COUNT = 'redux/user/UPDATE_PROGRESS_COUNT';
export const UPDATE_PROGRESS_RATING = 'redux/user/UPDATE_PROGRESS_RATING';
export const ADD_PROGRESS_ANIME = 'redux/user/ADD_PROGRESS_ANIME';

//! INIT
const initialState = {
  user: undefined,
  progress: undefined,
  accessToken: undefined,
  refreshToken: undefined,
};

//! REDUCERS
const reducer = (state = initialState, action) => {
  const { id, user, progress, accessToken, refreshToken } = action;

  switch (action.type) {
    case GET_USER:
      return state;

    case SET_USER:
      return { ...state, user, progress, accessToken, refreshToken };

    case LOGIN_USER:
      return state;

    //TODO CLEAR ALL STATES FROM REDUX AFTER LOGOUT!!!
    case LOGOUT_USER:
      return initialState;

    case UPDATE_TOKENS_SUCC:
      return { ...state, accessToken, refreshToken };

    case UPDATE_PROGRESS_STATUS:
      const { progState } = action;
      //! DELETE ANIME FROM PROGRESS
      if (progState === 'deleted')
        return {
          ...state,
          progress: state.progress.filter((anime) => anime.id !== id),
        };

      //! CHANGE ANIME PROGRESS STATUS
      return {
        ...state,
        progress: state.progress.map((anime) =>
          anime.id === id ? { ...anime, status: progState } : anime
        ),
      };

    case UPDATE_PROGRESS_COUNT:
      const { count } = action;
      return {
        ...state,
        progress: state.progress.map((anime) =>
          anime.id === id ? { ...anime, count: count } : anime
        ),
      };

    case UPDATE_PROGRESS_RATING:
      const { progRating } = action;
      return {
        ...state,
        progress: state.progress.map((anime) =>
          anime.id === id ? { ...anime, rating: progRating } : anime
        ),
      };

    case ADD_PROGRESS_ANIME:
      const { newProgressAnime } = action;
      return {
        ...state,
        progress: [...state.progress, newProgressAnime],
      };

    default:
      return state;
  }
};

//! ACTIONS
export const getUser = () => ({
  type: GET_USER,
});

export const setUser = (user) => ({
  type: SET_USER,
  user: user?.user,
  progress: user?.progress,
  accessToken: user?.accessToken,
  refreshToken: user?.refreshToken,
});

export const loginUser = ({ email, password }) => ({
  type: LOGIN_USER,
  email,
  password,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const updateToken = (user, accessToken, refreshToken) => ({
  type: UPDATE_TOKENS,
  user,
  accessToken,
  refreshToken,
});

export const updateTokenSuccess = ({ accessToken, refreshToken }) => ({
  type: UPDATE_TOKENS_SUCC,
  accessToken,
  refreshToken,
});

export const updateAnimeStatus = (progState, id) => ({
  type: UPDATE_PROGRESS_STATUS,
  progState,
  id,
});

export const updateAnimeCount = (count, id) => ({
  type: UPDATE_PROGRESS_COUNT,
  count,
  id,
});

export const updateAnimeRating = (progRating, id) => ({
  type: UPDATE_PROGRESS_RATING,
  progRating,
  id,
});

export const addProgressAnime = (newProgressAnime) => ({
  type: ADD_PROGRESS_ANIME,
  newProgressAnime,
});

//! EXPORT
export default reducer;
