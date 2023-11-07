import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./App.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About/About.jsx";
import Events from "./pages/Events/Events.jsx";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/events' element={<Events />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
