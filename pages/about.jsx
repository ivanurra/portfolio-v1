import Navbar from "../components/Navbar";
import Head from "next/head";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-8">
            <h1 className="title">About</h1>
            <p className="description">
                Hello! I'm Iván, a Full Stack Web Developer based in Madrid.
                I enjoy creating things that live on the internet. I am very 
                excited about the possibilities of technology making life 
                simpler.
                <br/>
                <br/>
                I value commitment, hard work, and dedication. I love
                teamwork and help others. I have worked for more than ten years
                in a highly regulated IT environment. 
                <br/>
                <br/>
                Here are a few technologies I've been working with recently:
                <br/>

                <ul id="skills">
                  <li>JavaScript (ES6+)</li>
                  <li>React</li>
                  <li>Angular</li>
                  <li>NextJS & GatsbyJS</li>
                  <li>TypeScript</li>
                  <li>HTML & (S)CSS</li>
                  <li>Node JS</li>
                  <li>Express JS</li>
                  <li>MongoDB</li>
                </ul>

            </p>
          </div>
          
          <div className="text-wrapper w-4">
            <p className="description">
            </p>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
