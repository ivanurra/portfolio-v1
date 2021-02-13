import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'
import Footer from '../components/Footer';

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
				  Some Things I’ve Built.
			      </p>

			      <div className="portfolio-wrapper">
			      	<div className="portfolio-item">
			      		<img src="/cinemabox1.png" className="portfolio-image" />

			      		<h4 className="portfolio-name">Cinemabox</h4>
			      		<div className="portfolio-category">Web App</div>
			      	</div>
			      	<div className="portfolio-item">
			      		<img src="/cocktailguide2.png" className="portfolio-image" />

			      		<h4 className="portfolio-name">Cocktail Guide</h4>
			      		<div className="portfolio-category">Web App</div>
			      	</div>
					<div className="portfolio-item">
			      		<img src="/politico2.png" className="portfolio-image" />

			      		<h4 className="portfolio-name">El Politico</h4>
			      		<div className="portfolio-category">Web Game</div>
			      	</div>
			      </div>
		      </div>
	      </div>
			</section>
			<Footer />
		</>
	);
}

export default Portfolio;