import React, { useState } from "react";
import "./header.css";

function LandingHeader() {
  return (
    <div className="header-image">
      <div className="title">
        <p className="titlep">Construccion y arquitectura</p>
        <p className="titleName">ONIX</p>
        <p className="titlebottom">Soluciones modernas a problemas modernos</p>
      </div>
      <div className="cotizaContainer">
        <button className="cotizaButton">Cotiza ahora</button>
      </div>
    </div>
  );
}

export default LandingHeader;
