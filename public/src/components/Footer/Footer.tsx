import React from "react";
import "./footer.scss";
import sun from "../../images/sun.png";
import moon from "../../images/moon.png";
import { FooterProps } from "../Interfaces/Interface";

const Footer = ({ toggleTheme, themes }: FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer__toggleTheme" onClick={() => toggleTheme()}>
        <img
          src={themes === "light" ? moon : sun}
          alt={themes === "light" ? "moon" : "sun"}
        />
      </div>
    </footer>
  );
};

export default Footer;
