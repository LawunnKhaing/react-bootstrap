// import React from 'react';
// import Navigation from './Navbar';
// import Home from './Home';
// import Blogs from './Blogs';
// import Contact from './Contact';

// function App() {
//   return (
//     <div>
//       <Navigation />
//       <Home />
//       {/* <Blogs /> */}
//       {/* <Contact /> */}
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Navigation from './Navbar';
import Home from './Home';
import Blogs from './Blogs';
import Contact from './Contact';

function App() {
  const [activePage, setActivePage] = useState('home');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      <Navigation onPageChange={handlePageChange} />
      {activePage === 'Home' && <Home />}
      {activePage === 'Blogs' && <Blogs />}
      {activePage === 'Contact' && <Contact />}
    </div>
  );
}

export default App;
