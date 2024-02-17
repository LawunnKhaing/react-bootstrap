import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Contact() {
  return (
    <div id="contact">
      <Card>
        <Card.Body>
          <Card.Title>Contact me</Card.Title>
          <Card.Text>
            For questions or feedback, please choose a category below.
          </Card.Text>
          <Button variant="primary">General Inquiry</Button>
          <Button variant="primary">Feedback</Button>
          <Button variant="primary">Support</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contact;
