


import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserAlt, FaCog } from 'react-icons/fa'; // Import icons
import { ListGroup } from 'react-bootstrap'; // Custom CSS for sidebar styling
function Sidenav() {
  return (
    <div className="sidenav  py-4">
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Link to="/" className="sidenav-link">
            <FaHome /> Home
          </Link>
        </ListGroup.Item><br/>
        <ListGroup.Item>
          <Link to="/profile" className="sidenav-link">
            <FaUserAlt /> Profile
          </Link>
        </ListGroup.Item><br/>
        <ListGroup.Item>
          <Link to="/Flowers" className="sidenav-link">
         <span class="material-icons">
local Flowers
</span>
          </Link>
        </ListGroup.Item><br/>
        <ListGroup.Item>
          <Link to="/settings" className="sidenav-link">
            <FaCog /> Settings
          </Link>
        </ListGroup.Item><br/>
      </ListGroup>
    </div>
  );
}

export default Sidenav
