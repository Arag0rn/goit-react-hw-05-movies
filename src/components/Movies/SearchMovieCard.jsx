import { Link, useLocation} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Searchbar } from "components/SearchBar/Searchbar";

export const SearchMovieCard = ({data}) => {
  const location = useLocation()
 

    return (
        <>

      <div style={{display:"flex", justifyContent: "center"}}>
      <Searchbar /></div>
      <div className="card-container">
        {data.map(({ id, title, poster_path }) => (
        <Link to={`/movies/${id}`} state={{from: location }}  style={{ textDecoration: "none" }}><Card key={id} style={{ width: '13em', height: "auto" }}>
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