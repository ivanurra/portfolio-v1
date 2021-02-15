import Link from 'next/link';
import Head from 'next/head'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';

function Home() {
  return (
    <>
      <Head>
        <title>Code with Ivan</title>
      </Head>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <p className="hello">Hi, my name is</p>
            <h1 className="myName">Iván Urra.</h1>
            <p className="myName-description">I'm a Full Stack Web Developer based in Madrid, Spain.</p>     
            <a href="mailto:ivan.urra.dev@gmail.com" className="cta"><i className="fas fa-paper-plane"></i>Contact me</a>            
            <Link href="/ResumePortfolio.pdf"><a className="cta-resume"><i className="fas fa-file-alt"></i>Resume</a></Link>
          </div>
        </div>
      </section>
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;

