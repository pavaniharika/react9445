import React from 'react';
import { Col, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sidenav from '../Components/Sidenav' // Import the Sidebar component
import { Flowers } from '../Data/Assets';  // Assuming this is the data you're using for flowers
function Fdata() {
  const display = Flowers.slice(  );  // Display only the first 4 flowers

  return (
    <div className="container-fluid py-4">
      <Row>
        <Col sm={2} className="sidebar-container p-2">
        <Sidenav /> {/* Sidebar Component */}  {/* Sidebar or side nav could be placed here */}
        </Col>
        <Col sm={10}>
          <h2 >Flower Data</h2>
          <Row>
            {display.map((flowers) => (
              <Col key={flowers.id} md={3} className="mb-4">
                 <div className="d-flex flex-wrap justify-content-start">
                <Card className="flower-card ">
                  <Card.Img variant="top" src={flowers.image} alt={flowers.name} />
                  <Card.Body>
                    <Card.Title>{flowers.name}</Card.Title>
                    <Card.Text>Category: {flowers.category}</Card.Text>
                    <Card.Text>Price: ${flowers.price}</Card.Text>
                    <Card.Text>description: {flowers.description}</Card.Text>
                    <Link to={`/Fdet/${flowers.id}`}>
                      <Button variant="primary">View Details</Button>
                    </Link>
                  </Card.Body>
                </Card>
            </div>
              </Col>
            ))}
          </Row>
          <Link to='/dashboard'>
            <Button variant="primary">back</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Fdata;

