import { MoviesDetailCard } from "components/MovieDetail/MoviesDetailCard"
import { useParams} from 'react-router-dom';
import { getMovieById } from "components/FetchApi";
import { useEffect, useState } from 'react';



const MovieDetail = ()=> {
    const [movieDetail, setMovieDetail] = useState({});




    const { id } = useParams();
  
    useEffect(() => {
        const onMovielick = async () => {
          try {
            const data = await getMovieById(id);
            setMovieDetail(data)
          } catch (error) {
            console.error(error);
          }
        };
        onMovielick();
      }, [id]);

    

    return (<>
          
         {movieDetail && <MoviesDetailCard data1={movieDetail} />}
       
    </>)
}

export default MovieDetail;