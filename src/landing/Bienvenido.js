import { Grid } from "@material-ui/core";
import React from "react";

function Bienvenido() {
  return (
    <div className="bienvenido">
      <h3>Bienvenido a ONIX Construcción y Arquitectura.</h3>
      <Grid container spacing={5}>
        <Grid item sm={6} xs={12}>
          <p className="bienvenidoP">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu
            neque vulputate diam rhoncus faucibus. Curabitur quis varius libero.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat sem at mauris suscipit porta. Cras metus velit, elementum
            sed pellentesque a, pharetra eu eros. Etiam facilisis placerat
            euismod. Nam faucibus neque arcu, quis accumsan leo tincidunt
            varius. In vel diam enim. Sed id ultrices ligula. Maecenas at urna
            arcu. Sed quis nulla sapien. Nam felis mauris, tincidunt at
            convallis id, tempor molestie libero. Quisque viverra sollicitudin
            nisl sit amet hendrerit. Etiam sit amet arcu sem. Morbi eu nibh
            condimentum, interdum est quis, tempor nisi. Vivamus convallis erat
          </p>
        </Grid>
        <Grid item sm={6} xs={12}>
          <p className="bienvenidoP">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu
            neque vulputate diam rhoncus faucibus. Curabitur quis varius libero.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat sem at mauris suscipit porta. Cras metus velit, elementum
            sed pellentesque a, pharetra eu eros. Etiam facilisis placerat
            euismod. Nam faucibus neque arcu, quis accumsan leo tincidunt
            varius. In vel diam enim. Sed id ultrices ligula. Maecenas at urna
            arcu. Sed quis nulla sapien. Nam felis mauris, tincidunt at
            convallis id, tempor molestie libero. Quisque viverra sollicitudin
            nisl sit amet hendrerit. Etiam sit amet arcu sem. Morbi eu nibh
            condimentum, interdum est quis, tempor nisi. Vivamus convallis erat
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Bienvenido;
