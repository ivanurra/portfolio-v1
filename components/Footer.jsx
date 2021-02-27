import { withRouter } from 'next/router';
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

function Footer() {

    const controls = useAnimation();
    const { ref, inView } = useInView({
      triggerOnce: true,
    });
    
    useEffect(() => {
      if (inView) {
      controls.start('visible');
      }
      if (!inView) {
      controls.start('hidden');
      }
    }, [controls, inView]);
    
    const variants = { 
      hidden: { 
      scale: 1, 
      opacity: 0, 
      y: 40 },
      visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 1 }
      }
    }

    return (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <footer className="footer">
            <nav>
              <ul>
                <li className="box">
                  <a
                    aria-label="Email"
                    href="mailto:ivan.urra.dev@gmail.com"
                    rel="noopener"
                    target="_blank"
                  >
                    <i className="fas fa-envelope-open foot"></i>
                  </a>
                </li>

                <li className="box">
                  <a
                    aria-label="Github"
                    href="https://github.com/ivanurra"
                    rel="noopener"
                    target="_blank"
                  >
                    <i className="fab fa-github foot"></i>
                  </a>
                </li>
      
                <li className="box">
                  <a
                    aria-label="LinkedIn"
                    rel="noopener"
                    href="https://www.linkedin.com/in/ivanurra/"
                    className="linkedin"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin foot"></i>
                  </a>
                </li>

              </ul>

              <p className="footer-name">Designed & Built by Ivan Urra</p>
              
            </nav>
          </footer>
        </motion.div>
      );
};

export default withRouter(Footer);