import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Portfolio() {
	return (
		<>
			<Head>
			  <title>Portfolio</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Portfolio</h1>
			      <p className="description">
				  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              		maximus eu quam et consectetur. Morbi vel dictum arcu.
			      </p>

			      <div className="portfolio-wrapper">
			      	<div className="portfolio-item">
			      		<img src="/chitchat.png" className="portfolio-image" />

			      		<h4 className="portfolio-name">Cinema Box</h4>
			      		<div className="portfolio-category">Web App</div>
			      	</div>
			      	<div className="portfolio-item">
			      		<img src="/kajian.jpg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Cocktail Guide</h4>
			      		<div className="portfolio-category">Web App</div>
			      	</div>
					<div className="portfolio-item">
			      		<img src="/chitchat.png" className="portfolio-image" />

			      		<h4 className="portfolio-name">El Politico</h4>
			      		<div className="portfolio-category">Web Game</div>
			      	</div>
			      </div>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default Portfolio;