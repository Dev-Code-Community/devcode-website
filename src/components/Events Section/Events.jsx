import React from "react";
import "./Eventstyles.css";

const Events = () => {
  const mainHeadingText = "Events";
  const descriptionText =
    "Dolor sit amet, consectetur adipisicing elit. Aliquid autem beatae consectetur cumque dolores dolorum enim inventore iure minus nostrum nulla numquam quam quia quod, reprehenderit.";
  const bottomText =
    "Building a thriving community of developers, by developers, for developers";

  return (
    <div className="main-container">

      <div className="event-section">

        <div className="event-content">

          <div className="event-heading"> {mainHeadingText} </div>

          <div className="popular-section">
            <div className="popular-text child">Most popular</div>
            <div className="event-heading-special chlid"> {mainHeadingText} </div>
          </div>

          <div>
            <p className="event-description"> {descriptionText} </p>
          </div>

          <div>
            <h1 className="bottom-text"> {bottomText} </h1>
          </div>

        </div>

        <div>
          <img
            className="event-image"
            alt="Event images"
            src="src/assets/event.png"
          />
        </div>

      </div>

    </div>
  );
};

export default Events;
