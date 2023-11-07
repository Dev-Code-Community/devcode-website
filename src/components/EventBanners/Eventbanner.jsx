import React from "react";
import "./Eventbanner.css";

const EventBanner = (props) => {
	return (
		<div class='container'>
			<img src={props.imageSrc} alt='Norway' style={{ width: "100%" }} />
			<div class='text-block'>
				<h4>{props.title}</h4>
				<p>{props.description}</p>
			</div>
		</div>
	);
};

export default EventBanner;
