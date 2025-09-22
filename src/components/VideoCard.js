import React from 'react';
import { Card } from 'react-bootstrap';

const VideoCard = ({ title, channel, thumbnail }) => (
  <Card style={{ width: '18rem', margin: '10px' }}>
    <Card.Img variant="top" src={thumbnail} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{channel}</Card.Text>
    </Card.Body>
  </Card>
);

export default VideoCard;
