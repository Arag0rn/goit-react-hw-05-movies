
import Card from 'react-bootstrap/Card';
import "./Trending.style.scss"

export const TrendingCard = ( {data} ) => {
    return (
      <>
      <h2>Trending Movies</h2>
      <div className="card-container">
        {data.map(({ popularity, original_title, release_date, poster_path }) => (
          <Card key={original_title} style={{ width: '13rem'}}>
            <Card.Img variant="top" src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/700?text=NoImageFound'} />
            <Card.Body>
              <Card.Title>{original_title}</Card.Title>
              <Card.Text>{popularity}</Card.Text>
              <Card.Text>{release_date}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      </>
    );
  };