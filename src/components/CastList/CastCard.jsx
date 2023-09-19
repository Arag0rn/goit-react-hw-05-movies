import Card from 'react-bootstrap/Card';

export const CastCard = ( {data} ) => {
    return (
      <>
    <h2>Cast</h2>
      <div className="card-container">
        {data.map(({ profile_path, name, character }) => (
         <Card style={{ width: '9rem'}}>
         <Card.Img  variant="top" src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : 'https://via.placeholder.com/700?text=NoImageFound'} />
         <Card.Body>
           <Card.Title><b>{name}</b> as {character}</Card.Title>
        
         </Card.Body>
       </Card>
        ))}
      </div>
      </>
    );
  };