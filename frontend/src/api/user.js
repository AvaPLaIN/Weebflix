import axios from 'axios';

//! url
const url = 'http://localhost:8800/api';

export const signin = async (formData) =>
  await axios.post(`${url}/users/signin`, formData);

export const signup = async (formData) =>
  await axios.post(`${url}/users/signup`, formData);
