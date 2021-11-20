import Head from "next/head";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

export default function About() {
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
    <div id="about">
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
          <div className="text-wrapper">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              <h1 className="title">
                <span className="color-number">01.</span>About Me
              </h1>
            </motion.div>

            <div className="about-box">
              <div>
                <p className="description">
                  Hello!{" "}
                  <span className="color-number">
                    I'm Iván, a Full Stack Web Developer.
                  </span>
                  I enjoy creating things that live on the internet. I am very
                  excited about the possibilities of technology making life
                  simpler.
                  <br />
                  <br />I value commitment, hard work, and motivation to{" "}
                  <span className="color-number">
                    learn something new every day.
                  </span>
                  I love teamwork and helping others. I have worked for more
                  than ten years in highly regulated IT environments.
                  <br />
                  <br />
                  Here are a few{" "}
                  <span className="color-number">technologies</span>I've been
                  working with recently:
                  <br />
                  <ul id="skills">
                    <li>
                      <i className="fas fa-caret-right"></i> JavaScript
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i> React JS
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i> Next JS
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i> Gatsby JS
                    </li>
                    {/* <li>
                      <i className="fas fa-caret-right"></i> TypeScript
                    </li> */}
                    <li>
                      <i className="fas fa-caret-right"></i> Node JS
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i> Express JS
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i> MongoDB
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i> HTML & (S)CSS
                    </li>
                    {/* <li>
                      <i className="fas fa-caret-right"></i> 
                    </li> */}
                  </ul>
                </p>
              </div>
              <img
                src="/picgreen.webp"
                alt="Ivan"
                className="pic-about"
                width="300"
                height="300"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
