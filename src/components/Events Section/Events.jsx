import React from "react";
import "./Eventstyles.css";

export const Events = () => {
  return (
    <div className="main-container">
      <div className="event-section">
        <div className="event-text">
          <h1 className="main-heading">Building a thriving community of developers, by developers, for developers</h1>
          <div className="events-title">Events</div>
          <img
            className="popular-events-image"
            alt="Most popular events"
            src="https://generation-sessions.s3.amazonaws.com/024340b113e5ede134ec6688509c153c/img/most-popular-events@2x.png"
          />
          <p className="description-text">
            Dolor sit amet, consectetur adipisicing elit. Aliquid autem beatae consectetur cumque dolores dolorum enim
            inventore iure minus nostrum nulla numquam quam quia quod, reprehenderit.
          </p>
        </div>
        <img
          className="event-images"
          alt="Event images"
          src="https://generation-sessions.s3.amazonaws.com/024340b113e5ede134ec6688509c153c/img/event-images.png"
        />
      </div>
    </div>
  );
};

export default Events;
