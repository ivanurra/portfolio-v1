import About from "./about";
import Footer from "../components/Footer";
import Contact from "./contact";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Portfolio from "./portfolio";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>ivanurra.dev</title>
        <meta itemprop="name" content="Ivan Urra" />
        <meta itemprop="url" content="https://ivanurra.dev/" />
        <meta
          property="og:description"
          content="Ivan Urra Portfolio - Full Stack Web Developer"
        />
        <meta property="og:image" content="http://ivanurra.dev/mockup-pic.jpg/" />
        <meta property="og:image:secure_url" content="https://ivanurra.dev/mockup-pic.jpg/" /> 
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
      <Navbar />
      <section className="hero">
        <motion.div
          className="container"
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
          <div className="text-wrapper">
            <p className="hello">Hi, my name is</p>
            <h1 className="myName">
              Iván Urra<span className="color-number">.</span>
            </h1>
            <p className="myName-description">
              I'm a Full Stack Web Developer based in Madrid, Spain.
            </p>
            <a href="mailto:ivan.urra.dev@gmail.com" className="cta">
              <i className="fas fa-paper-plane"></i>Contact me
            </a>
            <Link href="/resumeivanurra.pdf">
              <a className="cta-resume" target="_blank">
                <i className="fas fa-file-alt"></i>Resume
              </a>
            </Link>
          </div>
        </motion.div>
      </section>
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
