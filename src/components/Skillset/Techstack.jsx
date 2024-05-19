import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	DiJavascript1,
	DiReact,
	DiJava,
	DiGit,
  DiPython,
  DiPhp
} from "react-icons/di";
import {
  SiMaterialui,
  SiR,
  SiGithub,
  
  
  SiHtml5
} from "react-icons/si";

const Techstack = () => {
  return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiHtml5 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiPython />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiR />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiPhp />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiGithub />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJava />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMaterialui />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiGit />
			</Col>
		</Row>
	);
}

export default Techstack;
