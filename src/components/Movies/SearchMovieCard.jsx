import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export const SearchMovieCard = ({data}) => {
  console.log(data);
    return (
        <>
      <h2>Results</h2>
      <div className="card-container">
        {data.map(({ id, title, poster_path }) => (
        <Link to={`/movies/${id}`}  style={{ textDecoration: "none" }}><Card key={id} style={{ width: '13em', height: "auto" }}>
            <Card.Img variant="top" src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/700?text=NoImageFound'} />
            <Card.Body style={{pading: "15px"}}>
              <Card.Title style={{fontSize: "15px"}}>{title}</Card.Title>
            </Card.Body>
          </Card>
          </Link>
        ))}
      </div>
      </>
      );
    
}