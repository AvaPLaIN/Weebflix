import axios from 'axios';

//! url
const url = 'http://localhost:8800/api';

export const getMovies = async (jwt) => {
  try {
    const res = await axios.get(`${url}/movies/getMovies`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};
