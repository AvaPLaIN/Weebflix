import axios from 'axios';

//! url
const url = 'http://localhost:8800/api';

export const signin = async (formData) =>
  await axios.post(`${url}/users/signin`, formData);

export const signup = async (formData) =>
  await axios.post(`${url}/users/signup`, formData);

export const refreshTokens = async (data) =>
  await axios.post(`${url}/users/refreshTokens`, data);

export const updateUserProgress = async (jwt, progress) => {
  try {
    const res = await axios.post(`${url}/users/updateProgress`, progress, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const isTokenValid = async (user) => {
  const token = user?.tokenId || user?.data?.token;

  try {
    const res = await axios.post(
      `http://localhost:8800/api/auth/isTokenValid`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const refreshUser = async (accessToken, refreshToken, user) => {
  try {
    const res = await axios.post(`${url}/users/refreshUser`, {
      accessToken,
      refreshToken,
      user,
    });
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};
