import React from 'react';
import { Link } from 'react-scroll';
import LinkNext from 'next/link';

export default function Navbar() {
  return (

    <nav className="navbar navbar-custom">
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

    /* <nav class="navbar navbar-expand-lg">
      <div className="container">
        
        <LinkNext href="/"><a className="logo navbar-brand container">Code with Ivan</a></LinkNext>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">

              <li className="nav-item">
                <Link activeClass="active" to="about" spy={true} smooth={true} duration={1300}>
                  <a className="nav-item nav-link"><span className="color-number">01.</span>About</a>
                </Link>
              </li>
                
              <li className="nav-item">
                <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={1300}>
                <a className="nav-item nav-link"><span className="color-number">02.</span>Portfolio</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1300}>
                  <a className="nav-item nav-link"><span className="color-number">03.</span>Contact</a>
                </Link>
              </li>

              <li className="nav-item">
                <LinkNext href="/ResumePortfolio.pdf">
                  <a className="nav-item nav-link resume" target="_blank">Resume</a>
                </LinkNext>
              </li>

          </ul>
        </div>

      </div>
    </nav> */






  );
}