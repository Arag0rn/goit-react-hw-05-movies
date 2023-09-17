import axios from 'axios';
import { useParams } from 'react-router-dom';


axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.params = {
    api_key: 'a593ee12b04969e9385b0db7776b59ce',
  };



export const getTrendingMovie = async () => {
  const { data } = await axios.get('/trending/movie/day', {
    params: {
      page: 1,
    },
  });
  return data;
};


export const getUpcomingMovie = async () => {
  const { data } = await axios.get('/movie/top_rated', {
    params: {
      page: 1,
    },
  });
  return data;
};

export const getSearchMovie = async (query) => {
  const { data } = await axios.get('/search/movie', {
    params: {
      query,
      page: 1,
    },
  });
  console.log(data);
  return data;
};

