import React from "react";
import { Link } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function Navigation() {
  const onToggleConfetti = () => {
    confetti({
      zIndex: 999,
      particleCount: 200,
      spread: 160,
      angle: -90,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <Navbar expand="lg" variant="dark" className="fixed-top color-nav">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            y: 30,
            scale: 1,
            opacity: 0,
          },
          visible: {
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.6,
              delay: 0,
            },
          },
        }}
      >
        <Navbar.Brand href="/" className="navbar-brand">
          ivanurra<span className="color-number">.dev</span>
        </Navbar.Brand>
      </motion.div>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mt-4">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={1300}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 1,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 0,
                  },
                },
              }}
            >
              <a href="/about">
                <span className="color-number">01.</span>About
              </a>
            </motion.div>
          </Link>

          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            duration={1500}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 1,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 1.5,
                    delay: 0,
                  },
                },
              }}
            >
              <a href="/portfolio">
                <span className="color-number">02.</span>Portfolio
              </a>
            </motion.div>
          </Link>

          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={1900}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 1,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 2,
                    delay: 0,
                  },
                },
              }}
            >
              <a href="/contact">
                <span className="color-number">03.</span>Contact
              </a>
            </motion.div>
          </Link>

          <a>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 1,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 2.5,
                    delay: 0,
                  },
                },
              }}
            >
              <a
                href="/resumeivanurra.pdf"
                className="resume"
                download
                onClick={onToggleConfetti}
              >
                Resume
              </a>
            </motion.div>
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
