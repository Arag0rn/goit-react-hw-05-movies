
import Card from 'react-bootstrap/Card';

export const SearchMovieCard = ({data}) => {
  console.log(data);
    return (
        <>
      <h2>Results</h2>
      <div className="card-container">
        {data.map(({ backdrop_path, original_title, overview, poster_path }) => (
          <Card key={original_title} style={{ width: '13em', height: "450px" }}>
            <Card.Img variant="top" src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/700?text=NoImageFound'} />
            <Card.Body>
              <Card.Title>{original_title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
      </>
      );
    
}