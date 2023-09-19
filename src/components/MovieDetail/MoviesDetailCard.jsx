import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./MoviesDetailCard.style.scss"


export const MoviesDetailCard = ({data1}) => {
  console.log(data1);
  const { vote_average, genres
    , title, overview, poster_path  } = data1;
    return (
      <>
       <h2>Movie Detail</h2>
        <div className="card-container">
            <Card key={title} style={{ width: '70em', height: '22em', display: 'flex', flexDirection: 'row' }}>
              <Card.Img variant="left"  style={{ width: '15em', height: '19em' }} src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/700?text=NoImageFound'} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{vote_average}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Overview</Card.Subtitle>
                <Card.Text>{overview}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Genres</Card.Subtitle>
                {genres && genres.map(({ name }) => <Card.Text style={{display: 'inline-flex' }} key={name}>{name}</Card.Text>)}
                <Button className='movie-btn' variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
        </div>
        </>
      );
}