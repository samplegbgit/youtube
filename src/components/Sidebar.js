import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Sidebar = () => (
  <ListGroup style={{ width: '200px' }}>
    <ListGroup.Item action href="#">Home</ListGroup.Item>
    <ListGroup.Item action href="#">Trending</ListGroup.Item>
    <ListGroup.Item action href="#">Subscriptions</ListGroup.Item>
    <ListGroup.Item action href="#">Library</ListGroup.Item>
  </ListGroup>
);

export default Sidebar;
