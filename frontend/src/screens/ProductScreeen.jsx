import React, { useEffect, useState } from 'react'
// import products from '../products';
import { useParams, Link } from 'react-router-dom';
import { Button, Card, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
// import { increment } from '../features/cart/cartSlice';
import {addToCart} from '../features/cartitems/CartitemSlice';


function ProductScreeen() {

    const [qty, setQty] = useState(1); 

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    


    const cartitems = useSelector(state => state.cartitems);
    const dispatch = useDispatch();


    useEffect(() => {
        async function fetchProduct() {
            const { data } = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
            setProduct(data);
        }
        fetchProduct();
    },[]);

    const addToCartHandler = () => {
        dispatch(addToCart(product));
        // <Link to={`/cart/${id}?qty=${qty}`} />;
        

    }

  return (
    <div>
        <Link to='/' className='btn btn-light my-3'>Home</Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>

            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Rating
                            value={product.rating}
                            text={`${product.numReviews} reviews`}
                            color={'#fa7a0a'}
                        />
                    </ListGroup.Item>

                    
                    <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                    <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                </ListGroup>
            </Col>

            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        {product.countInStock > 0 && (
                            <ListGroup.Item>
                                <Row>
                                    <Col>Qty</Col>
                                    <Col xs="auto" className='my-1'>
                                        <Form.Control
                                            as = "select"
                                            value={qty}
                                            onChange={(e) => setQty(e.target.value)}
                                        >
                                            {[...Array(product.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )}

                        <ListGroup.Item>
        
                            <Link onClick={addToCartHandler} to={`/cart/${id}/${qty}`} className='btn btn-dark btn-block' type='button' disabled={product.countInStock === 0}>
                                Add To Cart
                            </Link>
                            
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default ProductScreeen;