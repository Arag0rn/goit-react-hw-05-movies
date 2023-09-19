import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieReview } from "components/FetchApi";
import { ReviewsCard } from "components/Reviews/ReviewsCard";

const Reviews =()=>{
    const [movieReviews, setMovieReviews ] = useState([])
    const { id } = useParams();
    console.log(id);


    useEffect(() => {
        const onGetMovieReview = async () => {
          try {
            const data = await getMovieReview(id);
            setMovieReviews(data);
            console.log(data);
          } catch (error) {
            console.error(error);
          }
        };
    
        
          onGetMovieReview();
        
      }, [id]);


    return  <>
     {movieReviews.length > 0 ? <ReviewsCard data={movieReviews}/> : <div>There is no reviews.</div>}
    </>
}

export default Reviews;


