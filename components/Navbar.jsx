import React from 'react';
import { Link } from 'react-scroll';
import LinkNext from 'next/link';
import { Navbar, Nav, NavDropdown,  } from "react-bootstrap";

export default function Navigation() {
  return (

    // <nav className="navbar">
    //   <div className="container">
    //     <LinkNext href="/"><a className="logo">Code with Ivan</a></LinkNext>

    //       <ul className="nav-links">
          
    //           <li>
    //             <Link activeClass="active" to="about" spy={true} smooth={true} duration={1300}>
    //               <a className="nav-item"><span className="color-number">01.</span>About</a>
    //             </Link>
    //           </li>
                
    //           <li>
    //             <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={1300}>
    //             <a className="nav-item"><span className="color-number">02.</span>Portfolio</a>
    //             </Link>
    //           </li>

    //           <li>
    //             <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1300}>
    //               <a className="nav-item"><span className="color-number">03.</span>Contact</a>
    //             </Link>
    //           </li>

    //           <li>
    //             <LinkNext href="/ResumePortfolio.pdf">
    //               <a className="nav-item resume">Resume</a>
    //             </LinkNext>
    //           </li>

    //       </ul>

    //   </div>
    // </nav>

    <Navbar expand="lg">
      <Navbar.Brand href="/" className="logo">Code with Ivan</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}