import { MoviesDetailCard } from "components/MovieDetail/MoviesDetailCard"
import { useParams } from 'react-router-dom';
import { getMovieById } from "components/FetchApi";
import { useEffect, useState } from 'react';

export const MovieDetail = ()=> {
    const [movieDetail, setMovieDetail] = useState({});

    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        const onMovielick = async () => {
          try {
            const data = await getMovieById(id);
            console.log(data);
            setMovieDetail(data)
          } catch (error) {
            console.error(error);
          }
        };
        onMovielick();
      }, [id]); 
    
  
      console.log(movieDetail);

    return (<>
         {movieDetail && <MoviesDetailCard data1={movieDetail} />} 
    </>)
}