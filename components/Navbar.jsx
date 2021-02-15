// import Link from 'next/link';
// import { withRouter } from 'next/router';

// function Navbar({ router }) {
//   const navs = [
//     { text: 'About', href: '../pages/about' },
//     { text: 'Portfolio', href: '/portfolio' },
//     { text: 'Contact', href: '/contact' },
//     { text: 'Resume', href:"/ResumePortfolio.pdf" },
//   ];

//   return (
//     <nav className="navbar">
//       <div className="container">
//         <Link href="/"><a className="logo">Code with Ivan</a></Link>

//         <ul className="nav-links">
//           { navs.map(nav => (
//             <li><Link href={nav.href}><a className={`nav-item ${ router.pathname == nav.href ? 'active' : '' }`}>{nav.text}</a></Link></li>
//           )) }
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default withRouter(Navbar);

import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-scroll';
import LinkNext from 'next/link';


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <LinkNext href="/"><a className="logo">Code with Ivan</a></LinkNext>

          {/* <div className="header"> */}
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
          {/* </div> */}
          {/* <div className="scrolling-buttons"> */}
            {/* <Wrapper>
              <OnScreenScrolling />
            </Wrapper> */}
          {/* </div> */}
      </div>
    </nav>
  );
}