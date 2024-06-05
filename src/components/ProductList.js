// ProductList.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardImg, CardBody, CardTitle,  } from 'reactstrap';
import { CartContext } from '../context/CartContext';
import products from '../data/products';

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="d-flex flex-wrap">
      {products.map(product => (
        <Card key={product.id} className="m-2" style={{ width: '18rem' }}>
          <CardImg top width="100%" src={product.image} alt={product.name} />
          <CardBody>
            <CardTitle tag="h5">{product.name}</CardTitle>
           
            <p>Price: ${product.price}</p>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            <Link to={`/product/${product.id}`} className="btn btn-secondary ml-2">Details</Link>
            
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
