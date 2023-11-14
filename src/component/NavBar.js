import React from "react";
import linkedinLogo from '../assets/linkedin.png';
import githubLogo from '../assets/github.png';


function NavBar() {
    const navbarStyle = {
        display: 'flex',
//   justifyContent: 'space-between', 
      backgroundColor: '#333',
      color: 'white',
      padding: '10px',
      textAlign: 'right',
      fontSize: '25px',
    };
  
    const linkStyle = {
      color: 'white',
      margin: '0 10px',
      textDecoration: 'none',
    };
    
      const iconStyle = {
        width: '30px', 
        height: '30px',
        marginRight: '10px',
        textDecoration: 'none',
      };
      const name = {
        textAlign : 'left',
      }
      
    return (
      <div style={navbarStyle}>
        <a style={name} >Samuel Saldivar</a>
          <a href="https://www.linkedin.com/in/samuel-saldivar-98aa24198/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinLogo} alt="LinkedIn" style={iconStyle} />
      </a>
      <a href="https://github.com/samuel408" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} style={iconStyle} />
      </a>
        <a href="/" style={linkStyle}>Home</a>
        <a href="/about" style={linkStyle}>About</a>
        <a href="/contact" style={linkStyle}>Contact</a>
      </div>
    );
  }

export default NavBar;