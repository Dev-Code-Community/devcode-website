import React from "react";
import "./AboutUs.css";
import { motion } from "framer-motion";
import SECTION2 from "../../assets/section_2.png";

function AboutUs() {
	return (
		<motion.div
			initial={{ opacity: 0, translateX: "100vw" }}
			animate={{ opacity: 1, translateX: "0" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className='aboutus_container'>
			<div className='aboutus_left'>
				<img src={SECTION2} />
			</div>
			<div className='aboutus_right'>
				<h1>About Us</h1>
				<div className='aboutus_label'>
					<div className='text-wrapper'>Where developers connect</div>
				</div>
				<p className='aboutus_desc'>
					{" "}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.{" "}
				</p>
			</div>
		</motion.div>
	);
}

export default AboutUs;
