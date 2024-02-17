// import React from 'react';
// import { Navbar, Container, Nav } from 'react-bootstrap';

// function Navigation() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <h1>My Website</h1>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#blogs">Blogs</Nav.Link>
//             <Nav.Link href="#Contact">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navigation;
// // Path: src/Navigation.jsx

import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Navigation({ onPageChange }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <h1>My Website</h1>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => onPageChange('Home')}>Home</Nav.Link>
            <Nav.Link onClick={() => onPageChange('Blogs')}>Blogs</Nav.Link>
            <Nav.Link onClick={() => onPageChange('Contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

