import Head from 'next/head'
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

function Portfolio() {
	return (
		<div id="portfolio">
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
								<h1 className="title"><span className="color-number">02.</span>Some Things I’ve Built</h1>
								<p className="description">
									I like to stay busy and always have a project in the works. Take a look at some of the applications I've dedicated my time to.
								</p>
								<div className="portfolio-wrapper">
									<div className="portfolio-item">
										<img src="/cinemabox.png" className="portfolio-image" />
										<h4 className="portfolio-name">Cinemabox</h4>
										<a href="https://github.com/ivanurra/cinema_box_frontend" rel="noopener" target="_blank"><i className="fab fa-github"></i></a>
										<a href="https://cinemabox.netlify.app/" rel="noopener" target="_blank"><i className="fas fa-external-link-alt"></i></a>
										<div className="portfolio-category">
											App about movies and TV shows. You will be able to check the 
											latest releases and the blockbusters of the moment.
											You can save your favorite movie or TV show, of any era, 
											so you don't miss anything. Buy popcorn!
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
										<img src="/cocktailguide.png" className="portfolio-image" />
										<h4 className="portfolio-name">Cocktail Guide</h4>
										<a href="https://github.com/ivanurra/cocktail-guide" rel="noopener" target="_blank"><i className="fab fa-github"></i></a>
										<a href="https://cocktailguide.herokuapp.com" rel="noopener" target="_blank"><i className="fas fa-external-link-alt"></i></a>
										<div className="portfolio-category">
											App about cocktails. You can choose hundreds of 
											recipes and you can sign up to upload your own creations and 
											share them with the world. It also includes the latest news on 
											the world of bar and spirits.
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
										<img src="/politico.png" className="portfolio-image" />
										<h4 className="portfolio-name">El Politico</h4>
										<a href="https://github.com/ivanurra/elPolitico-videogame" rel="noopener" target="_blank"><i className="fab fa-github"></i></a>
										<a href="https://ivanurra.github.io/elPolitico-videogame/" rel="noopener" target="_blank"><i className="fas fa-external-link-alt"></i></a>
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
							</div>
						</div>
				</section>
		</div>
	);
}

export default Portfolio;