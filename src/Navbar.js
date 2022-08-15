import React from "react";
import "./styles/index.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <div className="logo">
          <li className="logo">Okolie's Techy</li>
        </div>
        <div className="secpart">
          <li>Articles</li>
          <li>Charts</li>
          <li>Awards</li>
          <li>About</li>
        </div>
        <div>
          <button className="lastsec">Get in touch</button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
