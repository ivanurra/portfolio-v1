import Navbar from '../components/Navbar';
import Head from 'next/head'

function Contact() {
	return (
		<>
			<Head>
			  <title>Contact</title>
			</Head>
			<section className="hero">
			  <div className="container">
			    	<div className="text-wrapper w-full">
						<h1 className="title">Contact</h1>
						<p className="description">
							My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
						</p>
						<a href="mailto:ivan.urra.dev@gmail.com" className="cta"><i className="fas fa-paper-plane"></i>Contact me</a>
		      		</div>
	      		</div>
			</section>
		</>
	);
}

export default Contact;