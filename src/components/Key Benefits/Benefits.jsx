import React from "react";
import "./Benefits.css";

export const Benefits = () => {
  return (
    <div className="benefits-box">
      <div className="benefits-section">
        <div className="benefits">
          <div className="overlap-group">
            <h1 className="text-wrapper">Dev Code community</h1>
            <p className="p">Key benefits of joining the</p>
          </div>
          <p className="connect-with-other">
            Connect with other developers from diverse backgrounds and
            industries
            <br />
            Learn new skills and techniques from experts and peers
            <br />
            Showcase your projects and portfolio to potential employers and
            clients
            <br />
            Find mentorship, feedback, and support for your career growth
            <br />
            Participate in events, contests, and challenges to win prizes and
            recognition
          </p>
          <img className="tick" alt="Tick" src="tick.png" />
        </div>
        <img
          className="benefite-image"
          alt="Benefite image"
          src="benefite-image.png"
        />
      </div>
    </div>
  );
};
