import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import About from "./pages/About";

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
