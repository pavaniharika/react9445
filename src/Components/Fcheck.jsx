

import React, { useState } from 'react';
import { Button, Card, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Flowers } from '../Data/Assets'; 

function Fcheck() {
    const [shippingInfo, setShippingInfo] = useState({
        name: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        phone: '',
      });
    
      const [cart, setCart] = useState(Flowers={Flowers });
    
      // Calculate the total price
      const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
      };
    
      // Handle shipping info input change
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      // Handle form submission (this could be extended to connect to a payment API)
      const handleCheckout = (e) => {
        e.preventDefault();
        alert('Your order has been placed!');
        // Further processing for payment can be done here
      };
    
      return (
        <div className="container py-4">
          <h2>Checkout</h2>
    
          <Row>
            {/* Order Summary */}
            <Col sm={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Order Summary</Card.Title>
                  <Row>
                    {cart.map((item) => (
                      <Col key={item.id} sm={12} className="mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <img src={item.image} alt={item.name} style={{ width: '50px' }} />
                          <span>{item.name} (x{item.quantity})</span>
                          <span>${item.price * item.quantity}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <h5>Total:</h5>
                    <h5>${calculateTotal()}</h5>
                  </div>
                </Card.Body>
              </Card>
            </Col>
    
            {/* Shipping Information Form */}
            <Col sm={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Shipping Information</Card.Title>
                  <Form onSubmit={handleCheckout}>
                    <Form.Group controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={shippingInfo.name}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
    
                    <Form.Group controlId="address" className="mt-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your address"
                        name="address"
                        value={shippingInfo.address}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
    
                    <Form.Group controlId="city" className="mt-3">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your city"
                        name="city"
                        value={shippingInfo.city}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
    
                    <Form.Group controlId="postalCode" className="mt-3">
                      <Form.Label>Postal Code</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your postal code"
                        name="postalCode"
                        value={shippingInfo.postalCode}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
    
                    <Form.Group controlId="country" className="mt-3">
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your country"
                        name="country"
                        value={shippingInfo.country}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
    
                    <Form.Group controlId="phone" className="mt-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your phone number"
                        name="phone"
                        value={shippingInfo.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
    
                    <div className="d-flex justify-content-between mt-4">
                      <Button variant="secondary" as={Link} to="/cart">
                        Back to Cart
                      </Button>
                      <Button type="submit" variant="success">
                        Place Order
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      );
    }
export default Fcheck;



