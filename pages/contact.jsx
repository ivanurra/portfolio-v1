import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'
import Footer from '../components/Footer';

function Contact() {
	return (
		<>
			<Head>
			  <title>Contact</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    	<div className="text-wrapper w-full">
						<h1 className="title">Contact</h1>
						<p className="description">
							My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
						</p>
						{/* <ul className="contact-links">
							<li className="contact-item">Email: ivan.urra.dev@gmail.com</li>
							<li className="contact-item">Github: https://github.com/ivanurra</li>
							<li className="contact-item">LinkedIn: https://www.linkedin.com/in/ivanurra/</li>
						</ul> */}
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
									<i className="fas fa-envelope-open"></i>
									</a>
								</li>

								<li className="box">
									<a
									aria-label="Github"
									href="https://github.com/ivanurra"
									rel="noopener"
									target="_blank"
									>
									<i className="fab fa-github"></i>
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
									<i className="fab fa-linkedin"></i>
									</a>
								</li>
					
							</ul>
						</nav>
						</footer>
		      		</div>
	      		</div>
			</section>
		</>
	);
}

export default Contact;