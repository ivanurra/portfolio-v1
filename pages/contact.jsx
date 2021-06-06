import Head from "next/head";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function Contact() {
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
    <div id="contact">
      <Head>
        <title>ivanurra.dev</title>
        <meta itemprop="name" content="Ivan Urra" />
        <meta itemprop="url" content="https://ivanurra.dev/" />
        <meta
          property="og:description"
          content="Ivan Urra Portfolio - Full Stack Web Developer"
        />
        <meta property="og:image" content="https://ivanurra.dev/mockup.webp/" />
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
                <span className="color-number">03.</span>Get In Touch
              </h1>
            </motion.div>

            <p className="description-contact">
              My inbox is always open. Feel free to reach out if you're looking
              for a developer, have a question, or just want to say hi. I'll try
              my best to get back to you!
            </p>

            <a href="mailto:ivan.urra.dev@gmail.com" className="cta-contact">
              <i className="fas fa-paper-plane"></i>Say Hello
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
