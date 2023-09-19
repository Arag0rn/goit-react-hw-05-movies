import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import "./Trending.style.scss"

export const TrendingCard = ( {data} ) => {
    return (
      <>
      <h2>Trending Movies</h2>
      <div className="card-container">
        {data.map(({id, popularity, title, release_date, poster_path }) => (
         <Link to={`/movies/${id}`}> <Card key={title} style={{ width: '13rem'}}>
         <Card.Img variant="top" src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/700?text=NoImageFound'} />
         <Card.Body>
           <Card.Title>{title}</Card.Title>
           <Card.Text>{release_date.split('-').reverse().join('.')}</Card.Text>
         </Card.Body>
       </Card>
         </Link>
        ))}
      </div>
      </>
    );
  };