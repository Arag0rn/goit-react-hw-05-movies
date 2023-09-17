import { Header } from "./Header/Header";
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import { TrendingCard } from "./Trending/Trending";
import { useEffect, useState } from "react";
import {getTrendingMovie } from "./FetchApi";
import { FilmCard } from "./FilmCard"
import { getUpcomingMovie } from "./FetchApi";
import { Movies } from "./Movies/Movies";
import { getSearchMovie } from "./FetchApi";
import { queries } from "@testing-library/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const App = () => {
  const [results, setResults] = useState([])
  const [upcoming, setUpcoming] = useState([]) 
  const [serchresult, setSerchResult] = useState([]) 
  const [query, setQuery]  = useState("") 
  const navigate = useNavigate();

  useEffect(() => {
    const onFetchImages = async () => {
      try {
        const {results} = await getTrendingMovie(); 
        setResults(results)

      } catch (error) {
        console.error(error);
      }
    };
    onFetchImages();
  }, []); 

  useEffect(() => {
    const onUpcomingMovie = async () => {
      try {
        const {results} = await getUpcomingMovie(); 
        setUpcoming(results)
  
      } catch (error) {
        console.error(error);
      }
    };
    onUpcomingMovie();
  }, []); 


  useEffect(() => {
    const onSearchMovie = async () => {
      try {
        const {results} = await getSearchMovie(query); 
        setSerchResult(results)
        console.log(results);
      } catch (error) {
        console.error(error);
      }
    };
    onSearchMovie();
  }, [query]); 

  const onSearch = (search) => {
    const isValidInput = /^[a-zA-Z0-9\s]+$/.test(search);
    if (!isValidInput || search === "") {
      toast.error("Please enter a valid search query", {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
      setQuery(search)
      console.log(search);
      navigate(`/movies/${search}`)
    }
  };


  return (
    <>
    <Header onSearch={onSearch}/>
    <Routes>
    <Route path="/" element={<TrendingCard data={results}/>} />
    <Route path="/filmcard" element={<FilmCard data1={upcoming} />} />
    <Route path="/movies/:query" element={<Movies data={serchresult}/>} />
      {/* <Route path="/products" element={"https://www.youtube.com/"} /> */}
     
    </Routes> 
    <ToastContainer
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
  </>
  );
};