import React from "react";
import "./footer.css";
import CopyrightIcon from "@material-ui/icons/Copyright";
import GitHubIcon from "@material-ui/icons/GitHub";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="actualFooter">
        <h3 className="titulo">Onix C&A</h3>
        <hr />
        <div className="copyright">
          <CopyrightIcon />
          <p>Diseño y desarrollo: Octavio Lara</p>
        </div>
        <div className="copyright">
          <a href="https://www.whatsapp.com/api/4149917175">
            <WhatsAppIcon />
          </a>
          <a href="#">
            <InstagramIcon className="icon" />
          </a>
          <a href="#">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
