import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import img from "../images/1.jpg";
function Servicios() {
  return (
    <div className="servicioContainer">
      <Grid className="gridContainer" container>
        <Grid item xs={12} sm={6}>
          <div className="gridServicio">
            <h3 className="servicioH3">Servicio de arquitectura</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu
              neque vulputate diam rhoncus faucibus. Curabitur quis varius
              libero. Lorem.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Quisque sapien velit, aliquet eget commodo nec, auctor a
              sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur
              quis varius libero. Lorem.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu
              neque vulputate diam rhoncus faucibus. Curabitur quis varius
              libero. Lorem.
            </p>
          </div>
        </Grid>
        <Grid className="arquitectura" item xs={12} sm={6}></Grid>
        <Grid className="ingieneria" item xs={Hidden} sm={6}></Grid>
        <Grid item xs={12} sm={6}>
          <div className="gridServicio">
            <h3 className="servicioH3">Servicio de Ingieneria</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu
              neque vulputate diam rhoncus faucibus. Curabitur quis varius
              libero. Lorem.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Quisque sapien velit, aliquet eget commodo nec, auctor a
              sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur
              quis varius libero. Lorem.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu
              neque vulputate diam rhoncus faucibus. Curabitur quis varius
              libero. Lorem.
            </p>
          </div>
        </Grid>
        <Grid
          className="ingieneria1"
          item
          xs={12}
        ></Grid>
      </Grid>
    </div>
  );
}

export default Servicios;
