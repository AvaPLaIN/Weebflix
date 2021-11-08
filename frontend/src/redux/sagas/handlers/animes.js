import { call, put } from 'redux-saga/effects';
import {
  setAllAnimes,
  setGenresAnimes,
  setRandomAnime,
  setProgressAnimes,
  setFilteredByTitleAnimes,
} from '../../ducks/animes';
import {
  requestGetAllAnime,
  requestGetGenresAnime,
  requestGetRandomAnime,
  requestGetProgressAnimes,
  requestGetFilteredByTitleAnimes,
} from '../requests/animes';

export function* handleGetAllAnime(action) {
  try {
    const { jwt } = action;
    const res = yield call(() => requestGetAllAnime(jwt));
    const { data } = res;
    yield put(setAllAnimes(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetGenresAnime(action) {
  try {
    const { jwt, genres } = action;
    const res = yield call(() => requestGetGenresAnime(jwt, genres));
    const { data } = res;
    yield put(setGenresAnimes(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetRandomAnime(action) {
  try {
    const { jwt } = action;
    const res = yield call(() => requestGetRandomAnime(jwt));
    const { data } = res;
    yield put(setRandomAnime(data[0]));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetProgressAnimes(action) {
  try {
    const { jwt, progress } = action;
    const res = yield call(() => requestGetProgressAnimes(jwt, progress));
    const { data } = res;
    yield put(setProgressAnimes(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetFilteredByTitleAnimes(action) {
  try {
    const { jwt, filter } = action;
    const res = yield call(() => requestGetFilteredByTitleAnimes(jwt, filter));
    const { data } = res;
    yield put(setFilteredByTitleAnimes(data));
  } catch (error) {
    console.log(error);
  }
}
