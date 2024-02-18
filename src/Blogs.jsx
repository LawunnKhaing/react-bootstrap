import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';


const Blogs = () => {
  return (
    <div id="blogs" className="container mt-5">
      <h1>Blogs</h1>
      <h2>Blog Articles</h2>
      <p>Find the latest articles and blog posts here.</p>
      <Accordion defaultActiveKey="0" flush> 
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          
        <Card> 
          <Card.Header>Card Header #1</Card.Header>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Here's some content for the first blog article.</Card.Text>
          </Card.Body>
        </Card> 
        </Accordion.Body>
      </Accordion.Item>
      </Accordion> 
    </div>
  );
};

export default Blogs;
