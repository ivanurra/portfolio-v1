import About from './about';
import Footer from '../components/Footer';
import Contact from './contact';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Portfolio from './portfolio';
import { motion } from 'framer-motion';

function Home() {
  return (
    <>
      <Head>
          <title>ivanurra.dev</title>
          <meta property='og:title' content='ivanurra.dev'/>
          <meta property='og:image' content='https://ivanurra.dev/mockup.png/'/>
          <meta property='og:description' content='Portfolio: Ivan Urra - Full Stack Web Developer. Built with Next.js'/>
          <meta property='og:url' content='https://ivanurra.dev/'/>
      </Head>
      <Navbar />
      <section className="hero">
        <motion.div className="container" initial="hidden" animate="visible" variants={{
          hidden: {
            y: 30,
            scale: 1,
            opacity: 0
          },
          visible: {
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.6,
              delay: 0
            }
          }
        }}>
          <div className="text-wrapper">
            <p className="hello">Hi, my name is</p>
            <h1 className="myName">Iván Urra<span className="color-number">.</span></h1>
            <p className="myName-description">I'm a Full Stack Web Developer based in Madrid, Spain.</p>     
            <a href="mailto:ivan.urra.dev@gmail.com" className="cta"><i className="fas fa-paper-plane"></i>Contact me</a>            
            <Link href="/resumeivanurra.pdf" ><a className="cta-resume" target="_blank"><i className="fas fa-file-alt"></i>Resume</a></Link>
          </div>
        </motion.div>
      </section>
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
