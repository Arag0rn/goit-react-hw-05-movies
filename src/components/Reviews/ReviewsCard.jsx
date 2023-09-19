import Card from 'react-bootstrap/Card';
import "./ReviewsCard.styled.scss"
export const ReviewsCard = ({data}) => {
    console.log(data);
      return (
        <>
         <h2>Reviews</h2>
          <div className="reviews-container">
            {data.map(({author, content, id  }) => (
              <Card  style={{ width: '74.5em', height: 'auto', display: 'flex', flexDirection: 'row' }}>
                <Card.Body>
                  <Card.Title>{author}</Card.Title>
                  <Card.Text>{content}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
          </>
        );
            }