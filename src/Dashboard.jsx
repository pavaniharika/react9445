
// src/Dashboard.js
import React from 'react';
import { Col, Row, Card,Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sidenav from './Components/Sidenav';  // Import the Sidebar component
import { Flowers } from './Data/Assets';
import {Rare} from './Data/rare'





function Dashboard() {
  // Display only the first 4 flowers
  const display = Flowers.slice(0,3);
  const display1 = Rare.slice(0,3);
  return (
    <div className="container-fluid dashboard-container">
      <Row>
        <Col sm={2} className="sidebar-container p-2">
          <Sidenav /> {/* Sidebar Component */}
        </Col>
        <Col sm={10} className="py-4">
          <div className="d-flex flex-wrap justify-content-start">
            {display.map(Flowers => (
              <Card key={Flowers.id} className="flower-card mb-4 ">
                <Card.Img variant="top" src={Flowers.image} alt={Flowers.name} className="flower-image " />
                <Card.Body>
                  <Card.Title>{Flowers.name}</Card.Title>
                  <Card.Text>Category: {Flowers.category}</Card.Text>
                  <Card.Text>Color: {Flowers.color}</Card.Text>
                  <Card.Text>Price: ${Flowers.price}</Card.Text>
                  <Link to='/Fdet'>
                <Button>view more </Button>
          </Link>
                </Card.Body>
              </Card>
              
            ))}
          </div>
          <Link to='/Fdata'>
                <Button>view all </Button>
          </Link>
     

      {/* flowers card*/}
     
       
          <div className="d-flex flex-wrap justify-content-start">
            {display1.map((e) => (
              <Card key={e.id} className="flower-card mb-4 ">
                <Card.Img variant="top" src={e.image} alt={e.name} className="flower-image " />
                <Card.Body>
                  <Card.Title>{e.name}</Card.Title>
                  <Card.Text>Category: {e.category}</Card.Text>
                  <Card.Text>Color: {e.color}</Card.Text>
                  <Card.Text>Price: ${e.price}</Card.Text>
                  <Link to='/Rdet'>
                <Button>view more </Button>
          </Link>
                </Card.Body>
              </Card>
              
            ))}
          </div>
          <Link to='/Rdata'>
                <Button>view all </Button>
          </Link>
        </Col>   
      </Row>
    </div>
  );


}

export default Dashboard;

