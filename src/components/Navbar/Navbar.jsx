import React, { useState } from "react";
import { motion } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import { motion } from "framer-motion";
import Modal from "../Modal/Modal";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	const close = () => setOpenModal(false);
	const open = () => setOpenModal(true);

	return (
		<>
			<motion.div
				initial={{ opacity: 0, translateY: "-10vh" }}
				animate={{ opacity: 1, translateY: "0" }}
				transition={{ duration: 0.75, ease: "easeOut" }}
				className='navbar-bg'>
				<div className='nv__navbar'>
					<div className='nv__navbar-links'>
						<div className='nv__navbar-links_logo'>
							<a href='/'>
								<img src={logo} alt='logo' />
							</a>
						</div>
						<div className='nv__navbar-links_container'>
							<motion.p
								whileHover={{ scale: 1.1, translateY: -6 }}
								whileTap={{ scale: 0.9 }}>
								<a href='/about'>About Us</a>
							</motion.p>
							<motion.p
								whileHover={{ scale: 1.1, translateY: -6 }}
								whileTap={{ scale: 0.9 }}>
								<a href='/events'>Events</a>
							</motion.p>
							<motion.p
								whileHover={{ scale: 1.1, translateY: -6 }}
								whileTap={{ scale: 0.9 }}>
								<a href='/benefits'>Benefits</a>
							</motion.p>
						</div>
					</div>
					<div className='nv__navbar-button'>
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							type='button'
							onClick={() => (openModal ? close() : open())}>
							Join Us
						</motion.button>
					</div>
					<div className='nv__navbar-menu'>
						{toggleMenu ? (
							<RiCloseLine
								color='#fff'
								size={27}
								onClick={() => setToggleMenu(false)}
							/>
						) : (
							<RiMenu3Line
								color='#fff'
								size={27}
								onClick={() => setToggleMenu(true)}
							/>
						)}
						{toggleMenu && (
							<div className='nv__navbar-menu_container scale-up-center'>
								<div className='nv__navbar-menu_container-links'>
									<motion.p
										whileHover={{ scale: 1.1, translateY: -6 }}
										whileTap={{ scale: 0.9 }}>
										<a href='/about'>About Us</a>
									</motion.p>
									<motion.p
										whileHover={{ scale: 1.1, translateY: -6 }}
										whileTap={{ scale: 0.9 }}>
										<a href='/events'>Events</a>
									</motion.p>
									<motion.p
										whileHover={{ scale: 1.1, translateY: -6 }}
										whileTap={{ scale: 0.9 }}>
										<a href='/benefits'>Benefits</a>
									</motion.p>
								</div>
								<div className='nv__navbar-menu_container-links-sign'>
									<motion.button
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										type='button'
										onClick={() => (openModal ? close() : open())}>
										Join Us
									</motion.button>
								</div>
							</div>
						)}
					</div>
				</div>
			</motion.div>
			{openModal && <Modal openModal={openModal} handleClose={close} />}
		</>
	);
};

export default Navbar;
