import { call, put } from 'redux-saga/effects';
import { setUser, updateTokenSuccess } from '../../ducks/user';
import { requestLoginUser, requestUpdateTokens } from '../requests/user';

export function* handleLoginUser(action) {
  try {
    const res = yield call(requestLoginUser, action);
    const { data } = res;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleUpdateTokens(action) {
  try {
    const res = yield call(requestUpdateTokens, action);
    const { data } = res;
    yield put(updateTokenSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
