import { Link, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import  "./Trending.style.scss"


export const TrendingCard = ( {data} ) => {
  const location = useLocation();
    return (
      <>
      <h2>Trending Movies</h2>
      <div className="card-container">
        {data.map(({id, title, release_date, poster_path }) => (
         <Link to={`/movies/${id}`}  style={{ textDecoration: "none" }} state={{from: location }}> <div key={id} style={{ width: '13rem', border: "1px solid rgba(0, 0, 0, 0.175)", borderRadius: "0.375rem"}}>
         <Card.Img style={{borderRadius: "0.375rem"}} variant="top" src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/700?text=NoImageFound'} />
         <div style={{padding: "3px"}}>
           <Card.Title style={{fontSize: "15px"}}>{title}</Card.Title>
           <Card.Text>{release_date.split('-').reverse().join('.')}</Card.Text>
         </div>
       </div>
         </Link>
        ))}      
      </div>
      </>
    );
  };