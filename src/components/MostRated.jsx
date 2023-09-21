
import Card from 'react-bootstrap/Card';
import "./Trending/Trending.style.scss"
import { Link, useLocation } from 'react-router-dom';

export const MostRated = ( {data} ) => {
  const location = useLocation();
    return (
      <>
       <h2>Most Rated Movie</h2>
        <div className="card-container">
          {data.map(({ id, title, release_date, poster_path }) => (
           <Link to={`/movies/${id}`}  style={{ textDecoration: "none" }} state={{from: location }}><Card key={id} style={{ width: '13em' }}>
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
}