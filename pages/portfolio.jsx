import Head from "next/head";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

export default function Portfolio() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      scale: 1,
      opacity: 0,
      y: 40,
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 1 },
    },
  };

  return (
    <div id="portfolio">
      <Head>
        <title>ivanurra.dev</title>
        <meta itemProp="name" content="Ivan Urra" />
        <meta itemProp="url" content="https://ivanurra.dev/" />
        <meta
          property="og:description"
          content="Ivan Urra Portfolio - Full Stack Web Developer"
        />
        <meta
          property="og:image"
          content="http://ivanurra.dev/mockup-pic.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://ivanurra.dev/mockup-pic.jpg"
        />
        <meta
          property="og:site_name"
          content="Ivan Urra Full Stack Web Developer"
        />
        <meta property="og:title" content="ivanurra.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ivanurra.dev/" />
        <meta
          name="description"
          content="Ivan Urra Portfolio - Full Stack Web Developer"
        />
      </Head>
      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              <h1 className="title">
                <span className="color-number">02.</span>Some Things I’ve Built
              </h1>
            </motion.div>

            <p className="description">
              I like to stay busy and always have a project in the works. Take a
              look at some of the applications I've dedicated my time to:
            </p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img
                  src="/ivanurradev.webp"
                  className="portfolio-image"
                  alt="ivanurra.dev webpage"
                />
                <p className="portfolio-name h4">Portfolio</p>
                <a
                  href="https://github.com/ivanurra/portfolio-v1"
                  rel="noopener"
                  target="_blank"
                >
                  <i className="fab fa-github">
                    <span style={{ display: "none" }}>Git Portfolio</span>
                  </i>
                </a>
                <a href="https://ivanurra.dev" rel="noopener" target="_blank">
                  <i className="fas fa-external-link-alt">
                    <span style={{ display: "none" }}>Web Portfolio</span>
                  </i>
                </a>
                <div className="portfolio-category">
                  My portfolio. It's a Single Page Application (SPA), built with
                  Next.js. I am in love with this framework. My goal was to have
                  a minimalist portfolio where I could show my projects and
                  facilitate contact with me.
                </div>
                <div>
                  <ul className="portfolio-stack">
                    <li>NextJS</li>
                    <li>React</li>
                    <li>Framer-Motion</li>
                    <li>SASS</li>
                  </ul>
                </div>
              </div>
              <div className="portfolio-item">
                <img
                  src="/cinemabox.webp"
                  className="portfolio-image"
                  alt="cinemabox webpage"
                />
                <p className="portfolio-name h4">Cinemabox</p>
                <a
                  href="https://github.com/ivanurra/cinema_box_frontend"
                  rel="noopener"
                  target="_blank"
                >
                  <i className="fab fa-github">
                    <span style={{ display: "none" }}>Git Cinemabox</span>
                  </i>
                </a>
                <a
                  href="https://cinemabox.netlify.app/"
                  rel="noopener"
                  target="_blank"
                >
                  <i className="fas fa-external-link-alt">
                    <span style={{ display: "none" }}>Web Cinemabox</span>
                  </i>
                </a>
                <div className="portfolio-category">
                  App about movies and TV shows. You will be able to check the
                  latest releases and the blockbusters of the moment. You can
                  save your favorite movie or TV show, of any era, so you don't
                  miss anything. Buy popcorn!
                </div>
                <div>
                  <ul className="portfolio-stack">
                    <li>React</li>
                    <li>Express</li>
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img
                  src="/cocktailguide.webp"
                  className="portfolio-image"
                  alt="cocktailguide webpage"
                />
                <p className="portfolio-name h4">Cocktail Guide</p>
                <a
                  href="https://github.com/ivanurra/cocktail-guide"
                  rel="noopener"
                  target="_blank"
                >
                  <i className="fab fa-github">
                    <span style={{ display: "none" }}>Git Cocktail Guide</span>
                  </i>
                </a>
                <div className="portfolio-category">
                  App about cocktails. You can choose hundreds of recipes and
                  you can sign up to upload your own creations and share them
                  with the world. It also includes the latest news on the world
                  of bar and spirits.
                </div>
                <div>
                  <ul className="portfolio-stack">
                    <li>Handlebars</li>
                    <li>Express</li>
                    <li>Node</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
              <div className="portfolio-item">
                <img
                  src="/politico.webp"
                  className="portfolio-image"
                  alt="politico webpage"
                />
                <p className="portfolio-name h4">El Politico</p>
                <a
                  href="https://github.com/ivanurra/elPolitico-videogame"
                  rel="noopener"
                  target="_blank"
                >
                  <i className="fab fa-github">
                    <span style={{ display: "none" }}>Git El Politico</span>
                  </i>
                </a>
                <a
                  href="https://ivanurra.github.io/elPolitico-videogame/"
                  rel="noopener"
                  target="_blank"
                >
                  <i className="fas fa-external-link-alt">
                    <span style={{ display: "none" }}>Web El Politico</span>
                  </i>
                </a>
                <div className="portfolio-category">
                  Videogame created with the challenge of finishing it in just
                  four days. I used Canvas for the 2D graphics and it is
                  developed with JavaScript, HTML & CSS. It is a tribute to the
                  videogames that I played as a child.
                </div>
                <div>
                  <ul className="portfolio-stack">
                    <li>Canvas</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
