import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./MoviesDetailCard.style.scss"
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ReactComponent as BackImage } from "../../chevron.svg"




export const MoviesDetailCard = ({data1}) => {
  
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  const { vote_average, genres, id
    , title, overview, poster_path  } = data1;
    return (
      <>
       <h2>Movie Detail</h2>
        <div className="cast-container" >
          <Link  to={backLinkHref}>
        <BackImage alt="BackImage" />
        </Link>
            <Card key={id} style={{ width: '74.5em', height: 'auto', display: 'flex', flexDirection: 'row', padding: "20px", gap: "20px"}}>
              <Card.Img variant="left"  style={{ width: '15em', height: '19em' }} src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/700?text=NoImageFound'} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{vote_average}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Overview</Card.Subtitle>
                <Card.Text>{overview}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Genres</Card.Subtitle>
                {genres && genres.map(({ name }) => <Card.Text style={{display: 'inline-flex', marginLeft:"10px"}} key={name}>{name}</Card.Text>)}
               <div className="link-box"> 
               <Link style={{ textDecoration: "none" }} to={`/movies/${id}/cast`}> <Button variant="primary" className='movie-btn'>Cast</Button>{' '}</Link>
               <Link style={{ textDecoration: "none" }} to={`/movies/${id}/reviews`}><Button variant="primary"   className='movie-btn'>Reviews</Button>{' '}</Link>
                </div>
                
              </Card.Body>
            </Card>
            <Outlet />
        </div>
        </>
      );
}