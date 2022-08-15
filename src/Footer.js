import React from "react";
import github from "./images/Github.svg";
import linkedin from "./images/LinkedIn.svg";
import twitter from "./images/Twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer_logo">
        <p>Okolie's Techy</p>
      </div>
      <div className="footer_social">
        <img src={github} alt="github" srcset="" />
        <img src={linkedin} alt="linkedin" srcset="" />
        <img src={twitter} alt="Twitter" srcset="" />
      </div>
    </footer>
  );
};

export default Footer;
