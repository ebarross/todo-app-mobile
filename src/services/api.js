import axios from 'axios';
import {SERVER_HOST, SERVER_PORT} from 'react-native-dotenv';

const api = axios.create({
  baseURL: `${SERVER_HOST}:${SERVER_PORT}`,
});

export default api;
