import { MoviesDetailCard } from "components/MovieDetail/MoviesDetailCard"
import { useParams, useLocation} from 'react-router-dom';
import { getMovieById } from "components/FetchApi";
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';

const MovieDetail = ()=> {
    const [movieDetail, setMovieDetail] = useState({});


    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";

    const { id } = useParams();
  
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

export default MovieDetail;