import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import HERO_IMAGE from "../../assets/hero-removebg.png";
import DEVCODE from "../../assets/DevCode.png";

const Hero = () => {
	return (
		<motion.div
			initial={{ opacity: 0, translateX: "-100vw" }}
			animate={{ opacity: 1, translateX: "0" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className='hero_container'>
			<div className='hero_left'>
				<div className='hero_top_image'>
					<img src={DEVCODE} alt='hero' className='hero_devcode' />
				</div>
				<div className='hero_desc'>
					<h1>Join the Community of Developers</h1>
					<p>
						Collaborate, Learn, Innovate, Participate in events, contests, and
						challenges to win prizes and recognition
					</p>
				</div>
				<div className='hero_join'>
					<button>Join Our Community</button>
				</div>
			</div>
			<div className='hero_right'>
				<img src={HERO_IMAGE} alt='hero' className='hero_image' />
			</div>
		</motion.div>
	);
};

export default Hero;
