import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../../assets/sLogo.png";
import { Link } from "react-router-dom";
import { CgFileDocument } from "react-icons/cg";
import Resume from '../../pages/Resume'; 
import ReactDOM from 'react-dom'; 

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
    const [expanded, setExpanded] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
 const handleClick = () => {
		setExpanded(false); // Close the nav menu
		// Render the Resume component
		ReactDOM.render(<Resume />, document.getElementById("root"));
 };
  return (
		<Navbar
			expanded={expand}
			fixed="top"
			expand="md"
			className={navColour ? "sticky" : "navbar"}
		>
			<Container>
				<Navbar.Brand href="/" className="d-flex">
					<img
						src={logo}
						className="img-fluid "
						alt="brand"
						style={{ width: "90px" }} // Adjust the width as needed
					/>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					onClick={() => {
						updateExpanded(expand ? false : "expanded");
					}}
				></Navbar.Toggle>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto" defaultActiveKey="#home">
						<Nav.Item>
							<Nav.Link onClick={handleClick} as={Link} to="/resume">
								<CgFileDocument style={{ marginBottom: "2px" }} /> Resume
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
