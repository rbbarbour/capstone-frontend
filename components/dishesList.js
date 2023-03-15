import { gql, useQuery } from "@apollo/client";
import { useContext } from "react";
import AppContext from "./context";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col} from "reactstrap";


function DishesList({ restId, search }) {
  const { addItem } = useContext(AppContext);

  const GET_RESTAURANT_DISHES = gql`
    query ($id: ID!) {
      restaurant(id: $id) {
        id
        name
        dishes {
          id
          name
          description
          price
          image {
            url
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: restId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR here</p>;
  if (!data) return <p>Not found</p>;

  
  let searchQuery = data.restaurant.dishes.filter((res) =>{
    return res.name.toLowerCase().includes(search)
  })

  
  if(searchQuery.length > 0){
    const dishList = searchQuery.map((dish) => (
      <Col xs="6" sm="4" style={{ padding: 0 }} key={dish.id}>
        <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
          <CardTitle style={{ paddingLeft: 20, paddingTop: 10 }}><h5>{dish.name}</h5></CardTitle>
          <CardImg
            top={true}
            style={{ height: 200 }}
            src={`http://localhost:1337${dish.image.url}`}
          />
          <CardBody>
            <CardText style={{ height: 50 }}>{dish.description}</CardText>
          </CardBody>
          <div className="card-footer">
            ${dish.price.toFixed(2)}
            <br />
            <Button color="info" onClick={() => addItem(dish)}>
              + Add To Cart
            </Button>
          </div>
        </Card>
      </Col>
    ))
      
    return(
      <Container>
      <Row xs='3'>
        {dishList}
      </Row>
      </Container>  
    )
  } else {
    return <h1> No Dishes Found</h1>;
  }
}
export default DishesList;
