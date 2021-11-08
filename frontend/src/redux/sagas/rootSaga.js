import { takeLatest, all } from 'redux-saga/effects';

//! IMPORT HANDLERS
import {
  handleGetAllAnime,
  handleGetGenresAnime,
  handleGetRandomAnime,
  handleGetProgressAnimes,
  handleGetFilteredByTitleAnimes,
} from './handlers/animes';
import { handleLoginUser, handleUpdateTokens } from './handlers/user';
import { handleGetAllMovies } from './handlers/movies';

//! IMPORT CONSTANTS
import {
  ALL_ANIMES_FETCH,
  GENRES_ANIMES_FETCH,
  RANDOM_ANIME_FETCH,
  PROGRESS_ANIMES_FETCH,
  FILTER_BY_TITLE_ANIMES_FETCH,
} from '../ducks/animes';
import { LOGIN_USER, UPDATE_TOKENS } from '../ducks/user';
import { ALL_MOVIES_FETCH } from '../ducks/movies';

//! WATCHER-SAGA
export function* watcherSaga() {
  yield all([
    takeLatest(ALL_ANIMES_FETCH, handleGetAllAnime),
    takeLatest(GENRES_ANIMES_FETCH, handleGetGenresAnime),
    takeLatest(RANDOM_ANIME_FETCH, handleGetRandomAnime),
    takeLatest(PROGRESS_ANIMES_FETCH, handleGetProgressAnimes),
    takeLatest(FILTER_BY_TITLE_ANIMES_FETCH, handleGetFilteredByTitleAnimes),
    takeLatest(ALL_MOVIES_FETCH, handleGetAllMovies),
    takeLatest(LOGIN_USER, handleLoginUser),
    takeLatest(UPDATE_TOKENS, handleUpdateTokens),
  ]);
}
