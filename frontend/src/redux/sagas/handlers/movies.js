import { call, put } from 'redux-saga/effects';
import { setAllMovies } from '../../ducks/movies';
import { requestGetAllMovies } from '../requests/movies';

export function* handleGetAllMovies(action) {
  try {
    const { jwt } = action;
    const res = yield call(() => requestGetAllMovies(jwt));
    const { data } = res;
    yield put(setAllMovies(data));
  } catch (error) {
    console.log(error);
  }
}
