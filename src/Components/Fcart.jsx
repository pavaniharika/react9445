/*import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, ListGroup } from 'react-bootstrap';

function Fcart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load the cart from localStorage on page load
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const removeItemFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save updated cart
    setCart(updatedCart); // Update state
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCart([]); // Clear cart state
  };

  return (
    <div className="container" style={{ paddingTop: '50px' }}>
      <h2 className="text-center">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center">
          <h3>Your cart is empty!</h3>
          <Link to="/flowers">
            <Button variant="outline-primary">Browse Flowers</Button>
          </Link>
        </div>
      ) : (
        <div>
          <ListGroup>
            {cart.map((flower, index) => (
              <ListGroup.Item key={index}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{flower.name}</strong> - ₹{flower.price}
                  </div>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeItemFromCart(index)}
                  >
                    Remove
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="d-flex justify-content-between mt-3">
            <Link to="/flowers">
              <Button variant="outline-primary">Continue Shopping</Button>
            </Link>
            <Button variant="danger" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Fcart;
*/
import React, { useState } from 'react';
import { Button, Card, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Flowers } from '../Data/Assets'; 
function FCart() {
  // Sample cart items, replace with state management or context
  const [cart, setCart] = useState (Flowers={ });

  // Calculate the total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Update item quantity
  const handleQuantityChange = (id, quantity) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  };

  // Remove item from cart
  const handleRemoveItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="container py-4">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <Row>
          {cart.map((flowers) => (
            <Col key={flowers.id} sm={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={flowers.image} alt={flowers.name} />
                <Card.Body>
                  <Card.Title>{flowers.name}</Card.Title>
                  <Card.Text>Price: ${flowers.price}</Card.Text>
                  <Form.Control
                    type="number"
                    min="1"
                    value={flowers.quantity}
                    onChange={(e) => handleQuantityChange(flowers.id, parseInt(e.target.value))}
                  />
                  <div className="d-flex justify-content-between mt-2">
                    <Button variant="danger" onClick={() => handleRemoveItem(flowers.id)}>
                      Remove
                    </Button>
                    <div><strong>Total: ${flowers.price * flowers.quantity}</strong></div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      <div className="d-flex justify-content-between mt-4">
        <h3>Total: ${calculateTotal()}</h3>
        <Link to="/Fcheck">
          <Button variant="success">Proceed to Checkout</Button>
        </Link>
      </div>
    </div>
  );
}

export default FCart;
