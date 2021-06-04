import React from 'react';
import LinkNext from 'next/link';
import { Link } from 'react-scroll';
import { Navbar, Nav } from "react-bootstrap";
import { motion } from 'framer-motion';

export default function Navigation() {
  return (
      <Navbar bg="transparent" expand="lg" variant="dark">
                  <motion.div initial="hidden" animate="visible" variants={{
                        hidden: {
                              y: 30,
                              scale: 1,
                              opacity: 0
                        },
                        visible: {
                              y: 0,
                              scale: 1,
                              opacity: 1,
                              transition: {
                              duration: 0.6,
                              delay: 0
                              }
                        }
                        }}>
                        <Navbar.Brand href="/" className="navbar-brand">ivanurra<span className="color-number">.dev</span></Navbar.Brand>
                  </motion.div>
                  
                  <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                  <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="ml-auto">

                              <Link activeClass="active" to="about" spy={true} smooth={true} duration={1300}>
                                    <motion.div initial="hidden" animate="visible" variants={{
                                    hidden: {
                                          scale: 1,
                                          opacity: 0
                                    },
                                    visible: {
                                          scale: 1,
                                          opacity: 1,
                                          transition: {
                                          duration: 1,
                                          delay: 0
                                          }
                                    }
                                    }}>
                                          <a href="/about" style={{textDecoration: 'none'}}><span className="color-number">01.</span>About</a>
                                    </motion.div>
                              </Link>

                              <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={1500}>
                                    <motion.div initial="hidden" animate="visible" variants={{
                                          hidden: {
                                                scale: 1,
                                                opacity: 0
                                          },
                                          visible: {
                                                scale: 1,
                                                opacity: 1,
                                                transition: {
                                                duration: 1.5,
                                                delay: 0
                                                }
                                          }
                                          }}>
                                                <a href="/portfolio" style={{textDecoration: 'none'}}><span className="color-number">02.</span>Portfolio</a>
                                    </motion.div>
                              </Link>
                        
                              <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1900}>
                                    <motion.div initial="hidden" animate="visible" variants={{
                                          hidden: {
                                                scale: 1,
                                                opacity: 0
                                          },
                                          visible: {
                                                scale: 1,
                                                opacity: 1,
                                                transition: {
                                                duration: 2,
                                                delay: 0
                                                }
                                          }
                                          }}>
                                                <a href="/contact" style={{textDecoration: 'none'}} className=""><span className="color-number">03.</span>Contact</a>
                                    </motion.div>
                              </Link>

                              <Link to="resume">
                                    <LinkNext href="/resumeivanurra.pdf">
                                          <motion.div initial="hidden" animate="visible" variants={{
                                                hidden: {
                                                      scale: 1,
                                                      opacity: 0
                                                },
                                                visible: {
                                                      scale: 1,
                                                      opacity: 1,
                                                      transition: {
                                                      duration: 2.5,
                                                      delay: 0
                                                      }
                                                }
                                                }}>
                                                      <a href="/resumeivanurra.pdf" className="resume" style={{textDecoration: 'none'}}>Resume</a>
                                          </motion.div>
                                    </LinkNext>
                              </Link>
                        
                        </Nav>
                  </Navbar.Collapse>
      </Navbar>
  );
};