import "../assets/style/home.css";
import { NavLink } from "react-router-dom";

import { LuGithub } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <div className="page home">
      <div className="box texte">
        <p className="name-line1">Charbel</p>
        <p className="name-line2">QUENUM</p>
        <p className="title">développeur & designer web</p>

        {/* Boutons */}
        <div className="button-container">
          <NavLink to="/me" className="btn btn-outline">
            Résumé
          </NavLink>
          <NavLink to="/portfolio" className="btn btn-outline">
            Portfolio
          </NavLink>
        </div>

        {/* Liens sociaux en bas */}
        <div className="social-links">
          <a href="#" className="social-link"><MdOutlineWhatsapp /></a>
          <a href="#" className="social-link"><FaFacebookF /></a>
          <a href="#" className="social-link"><LuGithub /></a>
          <a href="#" className="social-link"><FaLinkedinIn /></a>
        </div>
      </div>
    </div>
  );
}