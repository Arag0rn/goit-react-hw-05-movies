import { Header } from "./Header/Header";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { TrendingCard } from "./Trending/Trending";
import { useEffect, useState } from "react";
import {getTrendingMovie } from "./FetchApi";



export const App = () => {
  const [results, setResults] = useState([])

  useEffect(() => {
    const onFetchImages = async () => {
      try {
        const {results} = await getTrendingMovie(); 
        setResults(results)
        console.log(results);
      } catch (error) {
        console.error(error);
      }
    };
    onFetchImages();
  }, []); 



  return (
    <BrowserRouter>
    <Header />
    <TrendingCard data={results}/>
    <Routes>
      <Route path="/" element={"https://www.youtube.com/"} />
      <Route path="/about" element={"https://www.youtube.com/"} />
      <Route path="/products" element={"https://www.youtube.com/"} />
    </Routes>
  </BrowserRouter>
  );
};