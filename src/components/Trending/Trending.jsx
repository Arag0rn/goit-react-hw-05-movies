import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Trending.style.scss"

export const TrendingCard = ( {data} ) => {
    return (
      <div className="card-container">
        {data.map(({ backdrop_path, original_title, overview, poster_path }) => (
          <Card key={original_title} style={{ width: '14em', height: "50em" }}>
            <Card.Img variant="top" src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/700?text=NoImageFound'} />
            <Card.Body>
              <Card.Title>{original_title}</Card.Title>
              <Card.Text>{overview}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  };