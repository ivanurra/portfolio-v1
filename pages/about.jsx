import Head from "next/head";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

function About() {
  return (
    <div id="about">
      <Head>
        <title>About</title>
      </Head>
      <section className="hero">
        <div className="container">

          <div className="text-wrapper">

              <h1 className="title"><span className="color-number">01.</span>About Me</h1>
              
                <div className="about-box">

                    <div>
                          <p className="description">
                              Hello! <span className="color-number">I'm Iván, a Full Stack Web Developer</span>based in Madrid, Spain.
                              I enjoy creating things that live on the internet. I am very 
                              excited about the possibilities of technology making life 
                              simpler.
                              <br/>
                              <br/>
                              I value commitment, hard work, and motivation to <span className="color-number">learn something new every day.</span> 
                              I love teamwork and helping others. I have worked for more than ten years in 
                              highly regulated IT environments.
                              <br/>
                              <br/>
                              Here are a few <span className="color-number">technologies</span>I've been working with recently:
                              <br/>

                              <ul id="skills">
                              
                                {/* <div> */}
                                    <li><i className="fas fa-caret-right"></i>  JavaScript (ES6+)</li>
                                    <li><i className="fas fa-caret-right"></i>  React</li>
                                    {/* <li><i className="fas fa-caret-right"></i>  Angular</li> */}
                                    <li><i className="fas fa-caret-right"></i>  NextJS</li>
                                    <li><i className="fas fa-caret-right"></i>  GatsbyJS</li>
                                {/* </div>
                                <div> */}
                                    {/* <li><i className="fas fa-caret-right"></i>  TypeScript</li> */}
                                    <li><i className="fas fa-caret-right"></i>  Handlebars</li>
                                    <li><i className="fas fa-caret-right"></i>  HTML & (S)CSS</li>
                                    <li><i className="fas fa-caret-right"></i>  NodeJS</li>
                                    <li><i className="fas fa-caret-right"></i>  ExpressJS</li>
                                    <li><i className="fas fa-caret-right"></i>  MongoDB</li>
                                {/* </div> */}

                              </ul>
                         </p>
                    </div>

                    <div>
                        <img src="/picgreen.jpg" alt="Ivan" className="pic-about" width="300" height="300"/>
                    </div>

                </div>

          </div>

        </div>
      </section>
    </div>
  );
}

export default About;
