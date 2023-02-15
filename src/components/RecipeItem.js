import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, CardGroup, Button,Row,Col } from "react-bootstrap";  
const RecipeItem = props => {
  const { name, image, ingredientLines } = props;
  return (
    <Container className='p-4 col-md-12'> 
    <CardGroup>  
      <Row>
        <Card>
        <img src={image} className="img-fluid w-50 mx-auto rounded-circle" />
        <div class="card-body">
          <h5>{name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          {ingredientLines.map(ingredient => (
            <li className="list-group-item">{ingredient}</li>
          ))}
        </ul>
      </Card>
      </Row>
      </CardGroup>
      </Container>
  );
};

export default RecipeItem;
