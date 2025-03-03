
import React from 'react';
import { Col, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sidenav from '../Components/Sidenav' // Import the Sidebar component // Assuming this is the data you're using for flowers
import  { Rare } from '../Data/rare';
function Rdata() {
 const display = Rare.slice(  );
 return (
  <div className="container-fluid py-4">
    <Row>
      <Col sm={2} className="sidebar-container p-2">
      <Sidenav /> {/* Sidebar Component */}  {/* Sidebar or side nav could be placed here */}
      </Col>
      <Col sm={10}>
        <h2 > Rare Flowers Data</h2>
        <Row>
          {display.map(flower => (
            <Col key={flower.id} md={3} className="mb-4">
               <div className="d-flex flex-wrap justify-content-start">
              <Card className="flower-card ">
                <Card.Img variant="top" src={flower.image} alt={flower.name} />
                <Card.Body>
                  <Card.Title>{flower.name}</Card.Title>
                  <Card.Text>Category: {flower.category}</Card.Text>
                  <Card.Text>rarity: {flower.rarity}</Card.Text>
                  <Card.Text>Price: ${flower.price}</Card.Text>
                  <Card.Text>description: {flower.description}</Card.Text>
                  <Link to={`/Rdata/${flower.id}`}>
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

export default Rdata

