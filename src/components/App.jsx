
import {  Routes, Route} from "react-router-dom";
import { Movies } from "pages/Movies";
import 'react-toastify/dist/ReactToastify.css';
import { Home } from "pages/Home";
import {Cast} from "pages/Cast";
import {Reviews} from "pages/Reviews";
import { MostRatedMovie } from "pages/MostRatedMovie";
import { TrendingMovies} from "pages/TrendingMovies";
import { MovieDetail } from "pages/MovieDetail";


export const App = () => {
 
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>} >
      <Route index element={< TrendingMovies  />} />
      <Route path="/most-rated-movie" element={<MostRatedMovie />} />
      <Route path="/cast" element={<Cast />} />
      <Route path="/movies/" element={<Movies />} />
      <Route path="/movies/:id" element={<MovieDetail />} />
      <Route path="/reviews" element={<Reviews />} />
    </Route>
    </Routes> 
  </>
  );
};