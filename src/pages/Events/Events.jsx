import React from "react";
import "./Events.css";
import EventBanner from "../../components/EventBanners/Eventbanner";
import IMG1 from "../../assets/1.jpg";
import IMG2 from "../../assets/2.jpg";

const Events = () => {
	return (
		<div className='events__container'>
			<h1>Our Events and Programs</h1>
			<p className='about_description'>
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout. The point of
				using Lorem Ipsum is that it has a more-or-less normal distribution of
				infancy. Various versions have evolved over the years, sometimes by
				accident, sometimes on purpose (injected humour and the like).
			</p>

			<div className='events__stats'>
				<div className='events__stats_container'>
					10+ Hosted
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='events__hero_icons'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z'
						/>
					</svg>
				</div>
				<div className='events__stats_container'>
					4000+ Participants
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='events__hero_icons'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
						/>
					</svg>
				</div>
				<div className='events__stats_container'>
					10+ Sponsors
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='events__hero_icons'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
						/>
					</svg>
				</div>
			</div>
			<div className='keybenifit_label'>
				<div className='text-wrapper'>Here are our past events</div>
			</div>
			<div className='eventsbanner__wrapper'>
				<EventBanner
					imageSrc={IMG1}
					title='Chris Fox'
					description='CEO at Mighty Schools. John Doe saved us from a web disaster.'
				/>
				<EventBanner
					imageSrc={IMG2}
					title='Rebecca Flex'
					description='CEO at Company. No one is better than John Doe.'
				/>
			</div>
		</div>
	);
};

export default Events;
