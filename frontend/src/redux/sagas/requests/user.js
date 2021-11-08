import { signin, refreshTokens } from '../../../api/user';

export function requestLoginUser({ email, password }) {
  const data = { email, password };
  return signin(data);
}

export function requestUpdateTokens({ user, accessToken, refreshToken }) {
  const data = { user, accessToken, refreshToken };
  return refreshTokens(data);
}
