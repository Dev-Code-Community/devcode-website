import "./Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <div className="header-upper">
        {" "}
        <span className="icon-star">✦</span>{" "}
        <span className="header-upper-text">
          {" "}
          Join the community of developers{" "}
          <span className="text-special">dev code</span>, and Grow your skills,
          build your network{" "}
        </span>{" "}
        <span className="icon-star">✦</span>{" "}
      </div>
      <div className="header-lower">
        <div className="logo-container">
          <img id="logo" src="src\assets\logo.png" alt="logo" />
        </div>
        <ul className="nav-links">
          <li id="home-link" className="nav-link">
            {" "}
            <a href=""> Home </a>{" "}
          </li>
          <li className="nav-link">
            {" "}
            <a href="#about"> About Us </a>{" "}
          </li>
          <li className="nav-link">
            {" "}
            <a href=""> Benefits </a>{" "}
          </li>
          <li className="nav-link">
            {" "}
            <a href=""> Events </a>{" "}
          </li>
          <li className="nav-link">
            {" "}
            <a href=""> Community </a>{" "}
          </li>
        </ul>
        <div className="nav-button">
          <button>Let's Connect</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
