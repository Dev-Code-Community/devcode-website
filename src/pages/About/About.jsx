import React from "react";
import "./About.css";
import Teamcard from "../../components/TeamCard/Teamcard";
import PRATAP from "../../assets/pratap.jpeg";
import POWALKAR from "../../assets/powalkar.jpeg";

const TEAM_MEMBERS = [
	{
		image: PRATAP,
		name: "Pratap Pawar",
		position: "Founder & CEO",
	},
	{
		image: POWALKAR,
		name: "Atharva Powalker",
		position: "Founder & CEO",
	},
	{
		image: PRATAP,
		name: "Pratap Pawar",
		position: "Founder & CEO",
	},
	{
		image: POWALKAR,
		name: "Atharva Powalker",
		position: "Founder & CEO",
	},
	{
		image: PRATAP,
		name: "Pratap Pawar",
		position: "Founder & CEO",
	},
	{
		image: POWALKAR,
		name: "Atharva Powalker",
		position: "Founder & CEO",
	},
];

function About() {
	return (
		<div className='about-container'>
			<section className='more-about-us'>
				<h2>More About Us</h2>
				<p className='about_description'>
					Dev Code is a Developer's community that aims to bridge the gap
					between with students with exposure at higher tier universities and
					the students with skills and curiosity of knowledge.We also have
					conducted Codehack 2023 in the month of Feb for beginners in
					technology with around 1200 participants and recently started with our
					podcast series: Dev Talks! Current Community Count: 4500 folks❤️
					<br></br>
					<br></br>
					Introducing Dev Code, a thriving Developer's community dedicated to
					connecting students with a passion for technology and knowledge. Our
					community aims to bridge the gap between students from different
					backgrounds and experiences, fostering an environment of collaboration
					and growth.
				</p>
			</section>
			<section className='meet-our-team'>
				<h2>Meet Our Team</h2>
				<p className='about_description'>
					Meet the people behind our successful community!
				</p>
				<div className='team-grid'>
					{TEAM_MEMBERS.map((member, index) => (
						<Teamcard
							key={index}
							image={member.image}
							name={member.name}
							position={member.position}
						/>
					))}
				</div>
			</section>
		</div>
	);
}

export default About;
