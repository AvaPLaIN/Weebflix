import axios from 'axios';

//! url
const url = 'http://localhost:8800/api';

export const getFilteredByTitleAnimes = async (jwt, filter) => {
  try {
    const res = await axios.get(`${url}/animes/findByName/${filter}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const getAllAnime = async (user) => {
  const token = user?.tokenId || user?.data.token;
  try {
    const res = await axios.get(`${url}/animes/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res?.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProgressAnimes = async (jwt, progress) => {
  try {
    const res = await axios.post(`${url}/animes/progress`, progress, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};

//! REDUX API
export const getReduxAllAnime = async (jwt) => {
  try {
    const res = await axios.get(`${url}/animes/all`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const getReduxGenresAnime = async (jwt, genres) => {
  try {
    const res = await axios.post(
      `${url}/animes/genres`,
      { genres: genres },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const getReduxRandomAnime = async (jwt) => {
  try {
    const res = await axios.get(`${url}/animes/random`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};
