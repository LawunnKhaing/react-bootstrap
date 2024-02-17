import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const Blogs = () => {
  return (
    <div>
      <div>
        <h1>Blogs</h1>
        <h2>Blog Articles</h2>
        <p>Find the latest articles and blog posts here.</p>

        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Accordion item #1
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Card.Title>Card Header #1</Card.Title>
                <Card.Text>Here's some content for the first blog article.</Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          {/* Add more Accordion items as needed */}
        </Accordion>
      </div>
    </div>
  );
};

export default Blogs;


