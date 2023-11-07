// Footer.js
import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
	return (
		<motion.div
			initial={{ opacity: 0, translateY: "10vh" }}
			animate={{ opacity: 1, translateY: "0" }}
			transition={{ duration: 0.75, ease: "easeOut" }}
			className='ft__footer_container'>
			<footer className='ft__footer'>
				<div className='ft__row upper'>
					<div className='ft__column ft__info_text'>
						<h3 className='ft__h3'>Devcode</h3>
						<ul className='ft__ul'>
							<li className='ft__li'>
								Collaborate, Learn, Innovate, Participate in events, contests,
								and challenges to win prizes and recognition
							</li>
						</ul>
					</div>

					<div className='ft__column'>
						<h3 className='ft__h3'>Contact</h3>
						<ul className='ft__ul'>
							<li className='ft__li'>
								<a href='#'>Phone : +91 7654 321 120 </a>
							</li>
							<li className='ft__li'>
								<a href='#'>Email : devcode@gmail.com</a>
							</li>
							<li className='ft__li'>
								<a href='#'>Address : Pune, Maharashtra - INDIA</a>
							</li>
						</ul>
					</div>
					{/* <div className='column'>
					<h3>Info</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div> */}
				</div>
				<div className='ft__row'>
					<div className='ft__social-icons'>
						<FaTwitter className='ft__icon' />
						<FaFacebook className='ft__icon' />
						<FaInstagram className='ft__icon' />
					</div>
				</div>
			</footer>
		</motion.div>
	);
};

export default Footer;
