import { useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
// import products from '../products.js';
import Product from "../components/Product.jsx";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice.js";
import Message from "../components/Message.jsx";

function HomeScreen() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   async function fetchProducts() {
  //       const {data} = await axios.get('http://127.0.0.1:8000/api/products/');
  //       setProducts(data);
  //       // console.log(data);
  //   }

  //   fetchProducts();
  // },[]);

  const productState = useSelector((state) => state.products);
  const { loading, error, products } = productState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      {loading ? (
        <Spinner
          animation="border"
          style={{ width: "3rem", height: "3rem", margin: "auto"}}
          className="d-flex text-center"
        />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Row>
          <h2>Latest Products</h2>

          {products.data?.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default HomeScreen;
