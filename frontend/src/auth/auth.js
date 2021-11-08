import decode from 'jwt-decode';

import { updateToken } from '../redux/ducks/user';

export const requireAuth = (user, dispatch) => {
  const { accessToken, refreshToken } = user;

  if (accessToken) {
    const isAccessTokenExpired = decode(accessToken).exp < Date.now() / 1000;
    const isRefreshTokenExpired = decode(refreshToken).exp < Date.now() / 1000;

    //! TOKENS EXPIRED
    if (isAccessTokenExpired && isRefreshTokenExpired) return false;

    //! ACCES TOKEN VALID
    if (!isAccessTokenExpired) {
      //TODO check token valid in backend
      return true;
    }

    //! REFRESH TOKEN VALID
    if (!isRefreshTokenExpired) {
      dispatch(updateToken(user, accessToken, refreshToken));
      return true;
    }

    //! DEFAULT CASE
    return false;
  }
};
