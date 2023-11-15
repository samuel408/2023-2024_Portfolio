import './App.css';
import React, { useState } from 'react';
import NavBar from './component/NavBar';
import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';
function App() {
  const [currentPage, setCurrentPage] = useState('/'); // Default page is 'Home
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (

    <div >
      <NavBar  />
     <About/>
     <Projects/>
     <Contact/>
    </div>
  );
}

export default App;
