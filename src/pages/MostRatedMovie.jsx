import { useEffect, useState } from "react";
import { MostRated } from "components/MostRated";
import { getUpcomingMovie } from "components/FetchApi";

export const MostRatedMovie = () => {

    const [upcoming, setUpcoming] = useState([]) 

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

      return <MostRated data={upcoming}/>

}