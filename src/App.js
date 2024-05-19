// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate
// } from "react-router-dom";

// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import Preloader from "./components/PreLoader"
// import ScrollToTop from "./components/ScrollToTop"

// import "./App.css";
// import "./style.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   const [load, upadateLoad] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       upadateLoad(false);
//     }, 1200);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
// 		<Router>
// 			<Preloader load={load} />
// 			<div className="App" id={load ? "no-scroll" : "scroll"}>
// 				<Navbar />
// 				<Home />
// 				<Skill />
// 				<Project />
// 				<Contact />

// 				<ScrollToTop />

// 				<Footer />
// 			</div>
// 		</Router>
// 	);
// }

// export default App;


import Home from "./pages/Home";
import Skill from "./pages/Skillset";
import Project from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/PreLoader"
import ScrollToTop from "./components/ScrollToTop"

import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const scrollToResume = () => {
    const resumeSection = document.getElementById('resume');
    resumeSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
		<div className="App" id={load ? "no-scroll" : "scroll"}>
			<Router>
				<Navbar scrollToResume={scrollToResume} />

				<ScrollToTop />

				<div >
					<Home />
				</div>
				<div >
					<Skill />
				</div>
				<div >{<Project />}</div>
				
				<div >{<Contact />}</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
