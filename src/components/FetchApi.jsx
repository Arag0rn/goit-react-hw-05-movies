import axios from 'axios';


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

