
import Head from 'next/head'
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

function Portfolio() {
	return (
		<div id="portfolio">
			<Head>
			  <title>Portfolio</title>
			</Head>
			<section className="hero">
						<div className="container">
							<div className="text-wrapper w-full">
								<h1 className="title"><span className="color-number">02.</span>Some Things I’ve Built</h1>
								{/* <p className="description">
								Some Things I’ve Built.
								</p> */}
								<div className="portfolio-wrapper">
									<div className="portfolio-item">
										<img src="/cinemabox1.png" className="portfolio-image" />

										<h4 className="portfolio-name">Cinemabox</h4>
										<i className="fab fa-github"></i>
										<i className="fas fa-external-link-alt"></i>
										<div className="portfolio-category">Web App</div>
										<div>
											<ul className="portfolio-stack">
												<li>React</li>
												<li>Express</li>
												<li>NodeJS</li>
												<li>MongoDB</li>
											</ul>
										</div>
									</div>
									<div className="portfolio-item">
										<img src="/cocktailguide2.png" className="portfolio-image" />

										<h4 className="portfolio-name">Cocktail Guide</h4>
										<i className="fab fa-github"></i>
										<i className="fas fa-external-link-alt"></i>
										<div className="portfolio-category">Web App</div>
										<div className="portfolio-stack">Web App</div>
									</div>
									<div className="portfolio-item">
										<img src="/politico2.png" className="portfolio-image" />

										<h4 className="portfolio-name">El Politico</h4>
										<i className="fab fa-github"></i>
										<i className="fas fa-external-link-alt"></i>
										<div className="portfolio-category">Web Game</div>
										<div className="portfolio-stack">Web App</div>
									</div>
								</div>
								{/* <a href="https://github.com/ivanurra" className="cta"><i className="fab fa-github gitlogo"></i>More Stuff</a> */}
							</div>
						</div>
				</section>
		</div>
	);
}

export default Portfolio;