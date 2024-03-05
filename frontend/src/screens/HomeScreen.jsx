// HomeScreen.jsx
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Product from '../Components/Product.jsx';

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error in fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Row>
        {Array.isArray(products) && products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
