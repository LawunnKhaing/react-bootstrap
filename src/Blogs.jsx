import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';

const Blogs = () => {
  return (
    <div>
      <h1>Blog Articles</h1>
      <p>Find the latest articles and blog posts here.</p>

      {/* <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Accordion item#1
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Content for the first blog article.</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion> */}
    </div>
  );
};

export default Blogs;
