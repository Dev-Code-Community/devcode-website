import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content-container">
        <div className="footer-about" id="about">
          <div className="title-wrapper">
            <div className="tilte">Dev Code</div>
            <div className="block-sm"></div>
          </div>
          <div className="text-wrapper text-about">
            <p className="text">
              Collaborate, Learn, Innovate, Participate in events, contests, and
              challenges to win prizes and recognition
            </p>
          </div>
        </div>
        <div className="footer-contact">
          <div className="title-wrapper">
            <div className="title">Contact Info</div>
            <div className="block-lg"></div>
            <div className="block-sm"></div>
          </div>
          <div className="text-wrapper">
            <p>Phone: +91 7654 321 120</p>
            <p>Email: devcode@gmail.com</p>
            <p>Address: Pune, Maharashtra - INDIA</p>
          </div>
        </div>
        <div className="footer-form-container">
          <form className="footer-form">
            <div className="form-input-wrapper">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Mobile" />
              <input type="text" placeholder="Subject" />
            </div>
            <textarea id="" cols="30" rows="5" placeholder="Message"></textarea>
            <br />
            <button>Any Doubt</button>
          </form>
        </div>
      </div>
      <div className="footer-img-container">
        <img
          id="footer-img"
          src="src\assets\footer-illustration 1.svg"
          alt="illustration"
        />
      </div>
      <div className="footer-credits">
        <div className="designer">
          Designed by <span className="text-special">Vishal Saraiwal</span>
        </div>
        <div className="copyright">
          {" "}
          &copy; 2023 <span className="text-special">
            Dev Code Community
          </span>{" "}
          All Rights Reserved.{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;
