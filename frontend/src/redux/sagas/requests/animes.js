import {
  getReduxAllAnime,
  getReduxGenresAnime,
  getReduxRandomAnime,
  getProgressAnimes,
  getFilteredByTitleAnimes,
} from '../../../api/anime';

export function requestGetAllAnime(jwt) {
  return getReduxAllAnime(jwt);
}

export function requestGetGenresAnime(jwt, genres) {
  return getReduxGenresAnime(jwt, genres);
}

export function requestGetRandomAnime(jwt) {
  return getReduxRandomAnime(jwt);
}

export function requestGetProgressAnimes(jwt, progress) {
  return getProgressAnimes(jwt, progress);
}

export function requestGetFilteredByTitleAnimes(jwt, filter) {
  return getFilteredByTitleAnimes(jwt, filter);
}
