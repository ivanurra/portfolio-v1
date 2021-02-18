import React from 'react';
import { Link } from 'react-scroll';
import LinkNext from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <LinkNext href="/"><a className="logo">Code with Ivan</a></LinkNext>
          <ul className="nav-links">
          
              <li>
                <Link activeClass="active" to="about" spy={true} smooth={true} duration={1300}>
                  <a className="nav-item"><span className="color-number">01.</span>About</a>
                </Link>
              </li>
                
              <li>
                <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={1300}>
                <a className="nav-item"><span className="color-number">02.</span>Portfolio</a>
                </Link>
              </li>

              <li>
                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1300}>
                  <a className="nav-item"><span className="color-number">03.</span>Contact</a>
                </Link>
              </li>

              <li>
                <LinkNext href="/ResumePortfolio.pdf">
                  <a className="nav-item resume">Resume</a>
                </LinkNext>
              </li>

          </ul>
      </div>
    </nav>
  );
}