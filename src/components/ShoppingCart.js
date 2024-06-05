import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Table, Button } from 'reactstrap';

const ShoppingCart = () => {
  const { cart, updateQuantity, removeFromCart, finalizePurchase } = useContext(CartContext);

  return (
    <div>
      <h2 className="my-4"> Shopping Cart</h2>
      <Table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, e.target.value)}
                  min="1"
                  className="form-control"
                />
              </td>
              <td>${item.price}</td>
              <td>${item.price * item.quantity}</td>
              <td>
                <Button color="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button color="primary" onClick={finalizePurchase}>Finalize Purchase</Button>
    </div>
  );
};

export default ShoppingCart;
