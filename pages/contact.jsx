import Head from 'next/head';

function Contact() {
	return (
		<div id="contact">
			<Head>
			<title>ivanurra.dev</title>
			<meta property='og:title' content='ivanurra.dev'/>
			<meta property='og:image' content='https://ivanurra.dev/ivanurradev.png'/>
			<meta property='og:description' content='Portfolio: Ivan Urra - Full Stack Web Developer. Built with Next.js'/>
			<meta property='og:url' content='https://ivanurra.dev/'/>
			</Head>
			<section className="hero">
			  <div className="container">
			    	<div className="text-wrapper w-full">
						<h1 className="title"><span className="color-number">03.</span>Get In Touch</h1>
						<p className="description-contact">
							My inbox is always open. Feel free to reach out if you're looking for a developer, 
							have a question, or just want to say hi. I'll try my best to get back to you!
						</p>
						<a href="mailto:ivan.urra.dev@gmail.com" className="cta-contact"><i className="fas fa-paper-plane"></i>Say Hello</a>
		      		</div>
	      		</div>
			</section>
		</div>
	);
};

export default Contact;
