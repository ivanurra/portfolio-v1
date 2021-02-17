
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
										<div className="portfolio-category">
											App about movies and TV shows. It allows you to keep up to date with 
											the latest releases and the greatest hits of the moment. 
											You can save your favorite movies and series so you don't miss anything.
										</div>
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
										<div className="portfolio-category">
											App about the world of cocktails. It contains a search engine that feeds on an API 
											and a CRUD database in MongoDB Atlas with the users of the app and the recipes 
											they can share with it.
										</div>
										<div>
											<ul className="portfolio-stack">
												<li>Handlebars</li>
												<li>Express</li>
												<li>Node</li>
												<li>MongoDB</li>
											</ul>
										</div>
									</div>
									<div className="portfolio-item">
										<img src="/politico2.png" className="portfolio-image" />
										<h4 className="portfolio-name">El Político</h4>
										<i className="fab fa-github"></i>
										<i className="fas fa-external-link-alt"></i>
										<div className="portfolio-category">
											Videogame created with the challenge of finishing it in just four days. 
											I used Canvas for the 2D graphics and it is developed with JavaScript, 
											HTML & CSS. It is a tribute to the videogames that I played as a child.
										</div>
										<div>
											<ul className="portfolio-stack">
												<li>Canvas</li>
												<li>JavaScript</li>
												<li>HTML</li>
												<li>CSS</li>
											</ul>
										</div>
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