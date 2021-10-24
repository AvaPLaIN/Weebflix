import axios from 'axios';

//! url
const url = 'http://localhost:8800/api';

export const getMovies = async (user) => {
  const token = user?.tokenId || user?.data.token;
  try {
    const res = await axios.get(`${url}/movies/getMovies`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res?.data;
  } catch (error) {
    console.error(error);
  }
};
