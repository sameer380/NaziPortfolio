import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/damn.png'
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';

const Home = () => {
  return (
		<section>
			<Container fluid className="home-section" id="home">
				<Particle />
				<Container className="home-content">
					<Row>
						<Col md={7} className="home-header">
							<h1 style={{ paddingBottom: 15 }} className="heading">
								Hi There!{" "}
								<span className="wave" role="img" aria-labelledby="wave">
									👋🏻
								</span>
							</h1>

							<h1 className="heading-name">
								I'M
								<strong className="main-name">
									{" "}
									Mohammad Naziya Niqhat <br/>  (محمد نازية نِقْهَت.)
								</strong>
							</h1>

							<div style={{ padding: 50, textAlign: "left" }}>
								<Type />
							</div>
						</Col>

						<Col md={5}>
							<img
								src={homeLogo}
								alt="home pic"
								className="img-fluid"
								style={{
									height: "500px",
									width: "600px",
									marginLeft: "100px",
								}}
							/>
						</Col>
					</Row>
				</Container>
			</Container>
			<About />
		</section>
	);
}

export default Home