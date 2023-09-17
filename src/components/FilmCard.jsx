import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Trending/Trending.style.scss"

export const FilmCard = ( {data1} ) => {
    console.log(data1);
    return (
      <>
       <h2>Most Rated Movie</h2>
        <div className="card-container">
          {data1.map(({ backdrop_path, original_title, overview, poster_path }) => (
            <Card key={original_title} style={{ width: '13em', height: "450px" }}>
              <Card.Img variant="top" src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/700?text=NoImageFound'} />
              <Card.Body>
                <Card.Title>{original_title}</Card.Title>
                <Button className='movie-btn' variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
        </>
      );
}