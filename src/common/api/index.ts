import axios from 'axios';

// Базовый url
export const { REACT_APP_API_URL } = process.env;

const $api = axios.create({
  baseURL: REACT_APP_API_URL,
});

export default $api;
