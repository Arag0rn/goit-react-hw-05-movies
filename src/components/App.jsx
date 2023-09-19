import { lazy, Suspense } from "react";
import {  Routes, Route} from "react-router-dom";
import { Loader } from "./Loader/Loader.jsx";
const Movies = lazy(() => import('../pages/Movies.jsx'));
const Home = lazy(() => import('../pages/Home.jsx'));
const CastPage = lazy(() => import('../pages/CastPage.jsx'));
const Reviews = lazy(() => import('../pages/Reviews.jsx'));
const MostRatedMovie = lazy(() => import('../pages/MostRatedMovie.jsx'));
const TrendingMovies = lazy(() => import('../pages/TrendingMovies.jsx'));
const MovieDetail = lazy(() => import('../pages/MovieDetail.jsx'));



export const App = () => {
 
  return (
    <Suspense fallback={<Loader/>}>
    <Routes>
    <Route path="/" element={<Home/>} >
      <Route index element={< TrendingMovies  />} />
      <Route path="/most-rated-movie" element={<MostRatedMovie />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<MovieDetail />} >
      <Route path="cast" element={<CastPage />} ></Route>
      <Route path="reviews" element={<Reviews />} ></Route>
      </Route>
    </Route>
    </Routes> 
    </Suspense>
  );
};

 