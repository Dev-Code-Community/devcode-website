import React from "react";
import "./Teamcard.css";

const Teamcard = ({ image, name, position, socialLinks = ["youtube.com"] }) => {
	return (
		<div className='team-card'>
			<img src={image} alt={name} className='team-card__image' />
			<h2 className='team-card__name'>{name}</h2>
			<p className='team-card__position'>{position}</p>
			<div className='team-card__social-links'>
				{socialLinks.map((link, index) => (
					<a href={link.url} key={index} className='team-card__social-link'>
						<i className={link.icon}></i>
					</a>
				))}
			</div>
		</div>
	);
};

export default Teamcard;
