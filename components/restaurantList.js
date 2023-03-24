import { gql, useQuery} from '@apollo/client';
import { useContext } from 'react';
import AppContext from "./context"
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
import Link from "next/link";

function RestaurantList(props) {  
  const { setRestaurant, isAuthenticated } = useContext(AppContext);
  const restaurantButtonText = isAuthenticated ? "Order from here" : "Sign up or sign in";
  const GET_RESTAURANTS = gql`
    query {
      restaurants {
        id
        name
        description
        image {
          url
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_RESTAURANTS)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  console.log(`Query Data: ${data.restaurants}`);


let searchQuery = data.restaurants.filter((res) =>{
    return res.name.toLowerCase().includes(props.search)
  })

// let restId = searchQuery[0].id
 
if(searchQuery.length > 0){
  const restList = searchQuery.map((res) => (
    <Col xs="6" sm="4" key={res.id}>
      <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
        <CardTitle style={{ paddingLeft: 20, paddingTop: 10 }}><h4>{res.name}</h4></CardTitle>
        <CardImg
          top={true}
          style={{ height: 200 }}
          src={`http://3.87.94.48:1337/${res.image.url}`}
        />
        <CardBody>
          <CardText style={{ height: 50 }}>{res.description}</CardText>
        </CardBody>
        <div className="card-footer">
        <Link href="/restaurant">
          <Button color="info" onClick={()=> setRestaurant(res)} disabled={!isAuthenticated}>
            {restaurantButtonText}
          </Button>
        </Link> 
        </div>
      </Card>
    </Col>
  ))

  return(
    <Container>
    <Row xs='3'>
      {restList}
    </Row>
    </Container>
 
  )
} else {
  return <h1> No Restaurants Found</h1>
}
}
   export default RestaurantList