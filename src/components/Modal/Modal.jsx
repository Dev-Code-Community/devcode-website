import { motion } from "framer-motion";
import "./styles.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const dropIn = {
	hidden: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: 1,
		transition: {
			duration: 0.1,
			type: "spring",
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		y: "100vh",
		opacity: 0,
	},
};

const Backdrop = ({ childern, handleClose }) => {
	return (
		<motion.div
			className='m__backdrop'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={handleClose}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className='m__container'
				variants={dropIn}
				initial='hidden'
				animate='visible'
				exit='exit'>
				{/* <div className='container'> */}
				<div className='m__social-media'>
					<div className='m__buttons'>
						<a href='#' className='m__facebook'>
							<FaFacebookF />
						</a>
						<a href='#' className='m__twitter'>
							<FaTwitter />
						</a>
						<a href='#' className='m__instagram'>
							<FaInstagram />
						</a>
						<a href='#' className='m__youtube'>
							<FaYoutube />
						</a>
					</div>
					<p className='m__text'>Join / Connect with us</p>
					<button className='m__close' onClick={handleClose}>
						Close
					</button>
				</div>
				{/* </div> */}
			</motion.div>
		</motion.div>
	);
};

export default Backdrop;
