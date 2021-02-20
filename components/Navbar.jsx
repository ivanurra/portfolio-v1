import React from 'react';
import LinkNext from 'next/link';
import { Link } from 'react-scroll';
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
  return (

    <Navbar expand="lg">
      <Navbar.Brand href="/" className="navbar-brand">Code with Ivan</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">

            <Link activeClass="active" to="about" spy={true} smooth={true} duration={1300}>
                  <a><span className="color-number">01.</span>About</a>
            </Link>

            <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={1300}>
                  <a><span className="color-number">02.</span>Portfolio</a>
            </Link>
      
            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1300}>
                  <a ><span className="color-number">03.</span>Contact</a>
            </Link>

            <Link>
                <LinkNext href="/ResumePortfolio.pdf" >
                      <a className="resume">Resume</a>
                </LinkNext>
            </Link>
        
        </Nav>
      </Navbar.Collapse>
  </Navbar>

  );
}














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





              {/* <Nav.Link href="#home">
          
                  <Link activeClass="active" to="about" spy={true} smooth={true} duration={1300}>
                    <a><span>01.</span>About</a>
                  </Link>
    
          </Nav.Link> */}