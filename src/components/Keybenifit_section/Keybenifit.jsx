import React from "react";
import "./Keybenifit.css";
import { motion } from "framer-motion";
import SECTION3 from "../../assets/section3.png";

function Keybenifit() {
	return (
		<motion.div
			initial={{ opacity: 0, translateX: "-100vw" }}
			animate={{ opacity: 1, translateX: "0" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className='keybenifit_container'>
			<div className='keybenifit_right'>
				<h1>Key Benifits</h1>
				<div className='keybenifit_label'>
					<div className='text-wrapper'>Dev Code community</div>
				</div>
				<p className='keybenifit_desc'>
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
			<div className='keybenifit_left'>
				<img src={SECTION3} />
			</div>
		</motion.div>
	);
}

export default Keybenifit;
