import { useState, useEffect } from "react";
import { getSearchMovie } from "components/FetchApi";
import { SearchMovieCard } from "components/Movies/SearchMovieCard";
import { useSearchParams } from "react-router-dom";

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? '';
  const [searchResult, setSearchResult] = useState([]);
console.log(query);

  useEffect(() => {
    const onSearchMovie = async () => {
      try {
        const { results } = await getSearchMovie(query);
        setSearchResult(results);
        console.log(results);
      } catch (error) {
        console.error(error);
      }
    };

    
      onSearchMovie();
    
  }, [query]);


  console.log(searchResult);
  return (
    <>
      <SearchMovieCard data={searchResult} />
    </>
  );
};