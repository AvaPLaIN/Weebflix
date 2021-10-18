import axios from 'axios';

//! url
const url = 'http://localhost:8800/api';

export const getRandomAnime = async (user) => {
  const token = user?.tokenId || user?.data.token;
  try {
    const res = await axios.get(`${url}/animes/random`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res?.data[0];
  } catch (error) {
    console.error(error);
  }
};

export const getAnimeByGenre = async (user, genre) => {
  const token = user?.tokenId || user?.data.token;
  try {
    const res = await axios.get(`${url}/animes/findByGenre/${genre}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res?.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAnimeByName = async (user, title) => {
  const token = user?.tokenId || user?.data.token;
  try {
    const res = await axios.get(`${url}/animes/findByName/${title}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res?.data;
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
