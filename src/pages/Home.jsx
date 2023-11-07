import React from "react";
import Hero from "../components/Hero/Hero";
import AboutUs from "../components/About_section/AboutUs";
import Keybenifit from "../components/Keybenifit_section/Keybenifit";
import Events from "../components/Events_section/Events";

function Home() {
	return (
		<div className='home-container'>
			<Hero />
			<AboutUs />
			<Keybenifit />
			<Events />
		</div>
	);
}

export default Home;
