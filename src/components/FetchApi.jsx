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
    },
  });
  console.log(data);
  return data;
};

export const getMovieById = async (id) => {
  const { data } = await axios.get(`/movie/${id}`)
  return data;
}

export const getMovieCast= async (id) => {
  const { data } =  await axios.get(`/movie/${id}/credits`)
  return data;
}

export const getMovieReview = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`)
  return data.results;
}