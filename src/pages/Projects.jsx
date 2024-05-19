import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import project from "../assets/projects/project.png";
import lift from "../assets/projects/lift.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					Recent Top <strong className="yellow">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={lift}
							isBlog={false}
							title="Culina Share"
							description="CulinaShare is a vibrant and dynamic online platform designed specifically for culinary enthusiasts from around the globe. Our mission is to provide a delightful and immersive experience where food lovers can discover, share, and save a vast array of recipes. Whether you're a seasoned chef, a home cook, or someone who simply enjoys the art of cooking, CulinaShare has something to offer everyone.
Join our ever-growing community and dive into a world of culinary delights. Explore a rich tapestry of recipes that span different cultures, cuisines, and dietary preferences. From traditional family favorites to innovative new dishes, you'll find an endless source of inspiration to fuel your culinary adventures."
							ghLink="https://github.com/Naazi04/CulinaShare"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={project}
							isBlog={false}
							title="Weather App"
							description="A Weather App is an intuitive and interactive web application built using HTML, CSS, and JavaScript, designed to provide users with real-time weather updates and forecasts. Users can search for weather information by entering city names, and the app displays current weather conditions, temperature, humidity, and wind speed. It also features a 5-day weather forecast, showing expected weather trends and temperature ranges. The app can automatically detect the user's location to provide immediate weather updates for their area. With a clean, responsive design, the app ensures a seamless user experience across various devices. Icons and visuals enhance the interface, making weather data easily understandable at a glance."
							ghLink="https://github.com/Naazi04/Weather-App"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={kickstart}
							isBlog={false}
							title="Netflix Application"
							description="Stripe APA Netflix-like application is a dynamic web platform built using HTML, CSS, and JavaScript, designed to emulate the popular streaming service's user experience. This application allows users to browse a wide selection of movies and TV shows, displaying them in an organized and visually appealing manner. The homepage features a carousel of highlighted content and various sections for different genres and recommendations. Users can search for specific titles, filter content by genre, and view detailed information about each show or movie, including a synopsis, cast, and ratings. The app supports user authentication, enabling users to create accounts, log in, and manage their watchlists."
							ghLink="https://github.com/Naazi04/Netflix-login"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects