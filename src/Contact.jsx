import React from 'react';
import { Card } from 'react-bootstrap';

function Contact() {
  return (
    <div id="contact" className="container mt-4">
      <Card className="border-primary">
        <Card.Body>
          <Card.Title className="border-bottom pb-2">Contact me</Card.Title>
          <Card.Text>
            For questions or feedback, please choose a category below.
          </Card.Text>
          <Card className="bg-light mt-3">
            <Card.Body>
              <Card.Title className="border-bottom pb-2">General Inquiry</Card.Title>
              <Card.Text style={{ backgroundColor: '#cce5ff', padding: '0.5rem', marginBottom: '0.5rem', borderRadius: '0.25rem' }}>
                generalinquiry@example.com
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="bg-light mt-3">
            <Card.Body>
              <Card.Title className="border-bottom pb-2">Feedback</Card.Title>
              <Card.Text style={{ backgroundColor: '#cce5ff', padding: '0.5rem', marginBottom: '0.5rem', borderRadius: '0.25rem' }}>
                feedback@example.com
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="bg-light mt-3">
            <Card.Body>
              <Card.Title className="border-bottom pb-2">Support</Card.Title>
              <Card.Text style={{ backgroundColor: '#cce5ff', padding: '0.5rem', marginBottom: '0.5rem', borderRadius: '0.25rem' }}>
                support@example.com
              </Card.Text>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contact;
