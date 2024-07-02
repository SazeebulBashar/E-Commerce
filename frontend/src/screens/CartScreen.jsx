import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ListGroup, Row, Col } from 'react-bootstrap';
import Message from '../components/Message';

function CartScreen() {
  const {id,qty} = useParams();

  const items = useSelector((state) => state.cartitems);
  const dispatch = useDispatch();
  console.log(items);

  useEffect(() => {

  },[]);

  return (
    <>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {items.length === 0 ? (
            <Message variant="info">
            Your cart is empty <Link to="/">Go Back</Link>
            </Message>
              
          ) :

          (
            <ListGroup variant="flush">
              {items.map((item) => (
              <h1> {item.name}  </h1>
  
              ))}
              </ListGroup>
          )
          
          
          
          }
        </Col>
      </Row>
    </>
  )
}

export default CartScreen;