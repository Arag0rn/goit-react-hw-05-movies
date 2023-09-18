import { TrendingCard } from "components/Trending/TrendingCard"
import { useEffect, useState } from "react";
import { getTrendingMovie } from "components/FetchApi";


export const TrendingMovies =()=>{
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

    return <TrendingCard data={results}/>
}