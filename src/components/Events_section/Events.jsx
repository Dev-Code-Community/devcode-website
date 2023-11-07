import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Events.css";
import ONE from "../../assets/1.jpg";
import TWO from "../../assets/2.jpg";
import THREE from "../../assets/3.jpg";
import FOUR from "../../assets/4.jpg";

function AboutUs() {
	return (
		<div className='events_container'>
			<div className='events_right'>
				<h1>Our Events</h1>
				<div className='events_label'>
					<div className='text-wrapper'>
						Building a thriving community of developers, by developers, for
						developers
					</div>
				</div>
			</div>
			<div className='events_left'>
				<Carousel autoPlay>
					<div>
						<img src={ONE} />
						<p className='legend'>Legend 1</p>
					</div>
					<div>
						<img src={TWO} />
						<p className='legend'>Legend 2</p>
					</div>
					<div>
						<img src={THREE} />
						<p className='legend'>Legend 3</p>
					</div>
					<div>
						<img src={FOUR} />
						<p className='legend'>Legend 4</p>
					</div>
				</Carousel>
			</div>
		</div>
	);
}

export default AboutUs;
