import { Link } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="fixed-top color-nav shadow-navbar"
    >
      <Navbar.Brand href="/" className="navbar-brand">
        ivanurra<span className="color-number">.dev</span>
      </Navbar.Brand>

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
            <a href="/about">
              <span className="color-number">01.</span>About
            </a>
          </Link>

          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            duration={1500}
          >
            <a href="/portfolio">
              <span className="color-number">02.</span>Portfolio
            </a>
          </Link>

          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={1900}
          >
            <a href="/contact">
              <span className="color-number">03.</span>Contact
            </a>
          </Link>

          <a>
            <a href="/resumeivanurra.pdf" className="resume">
              Resume
            </a>
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
