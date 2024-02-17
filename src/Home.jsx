import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';

function Home() {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubscribe = () => {
    // Implement your subscribe logic here
    setShowSuccess(true);
  };

  return (
    <div id="home">
      <Card>
        <Card.Body>
          <Card.Title>Welcome</Card.Title>
          <Card.Text>
            This is the homepage of our website. Explore other sections using the navigation above.
          </Card.Text>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSubscribe}>
              Subscribe
            </Button>
          </Form>
          {showSuccess && <Alert variant="success">Successfully subscribed with email {email}</Alert>}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
