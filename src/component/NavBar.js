import React from "react";
import linkedinLogo from '../assets/linkedin.png';
import githubLogo from '../assets/github.png';
import {Button} from 'react-bootstrap';


function NavBar() {
    const navbarStyle = {
        display: 'flex',
//   justifyContent: 'space-between', 
      backgroundColor: '#373A36',
      color: 'white',
      padding: '10px',
      textAlign: 'right',
      fontSize: '25px',
    };
  
    const linkStyle = {
      color: '#E6E2DD',
      margin: '0 10px',
      textDecoration: 'none',
      backgroundColor: '#D48166'
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
      <a href="/contact" style={linkStyle}>
  <Button variant="primary" style={{ backgroundColor: '#D48166', border: 'none' }} className="rounded">Contact Me</Button>
</a>
        </div>
    );
  }

export default NavBar;