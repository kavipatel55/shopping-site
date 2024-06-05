import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import products from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  return (
    <div>
      <Link to="/" className="btn btn-secondary mb-3">Back to Product List</Link>
      <Card className="m-2">
        <CardImg top width="50%" src={product.image} alt={product.name} />
        <CardBody>
          <CardTitle tag="h5">{product.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{product.description}</CardSubtitle>
          <p>Price: ${product.price}</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductDetails;
