import React from 'react';
import LinkNext from 'next/link';
import { Link } from 'react-scroll';
import { Navbar, Nav } from "react-bootstrap";
import { motion } from 'framer-motion';

export default function Navigation() {
  return (
      <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
                  scale: 1,
                  opacity: 0
            },
            visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                  duration: 0.5,
                  delay: 1
                  }
            }
          }}>
            <Navbar bg="transparent" expand="lg" variant="dark">
                  <Navbar.Brand href="/" className="navbar-brand">ivanurra<span className="color-number">.dev</span></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav">
            
                  </Navbar.Toggle>
                  <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">

                        <Link activeClass="active" to="about" spy={true} smooth={true} duration={1300}>
                              <a><span className="color-number">01.</span>About</a>
                        </Link>

                        <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={1500}>
                              <a><span className="color-number">02.</span>Portfolio</a>
                        </Link>
                  
                        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1900}>
                              <a ><span className="color-number">03.</span>Contact</a>
                        </Link>

                        <Link to="resume">
                        <LinkNext href="/resumeivanurra.pdf">
                              <a className="resume">Resume</a>
                        </LinkNext>
                        </Link>
                  
                  </Nav>
                  </Navbar.Collapse>
            </Navbar>
      </motion.div>
  );
}