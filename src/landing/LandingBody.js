import React from "react";
import Bienvenido from "./Bienvenido";
import Sedes from "./Sedes";
import Servicios from "./Servicios";
import Talento from "./Talento";
import ThreeLanding from "./ThreeLanding";
import Form from "./Form";

function LandingBody() {
  return (
    <>
      <ThreeLanding />
      <Bienvenido />
      <Servicios />

      <Talento />
      <Sedes />
      <Form />
    </>
  );
}

export default LandingBody;
