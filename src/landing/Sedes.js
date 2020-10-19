import { Grid, Hidden } from "@material-ui/core";
import React from "react";
import "./landingBody.css";

function Sedes() {
  return (
    <div className="SedeContainer">
      <Grid container className="sedesGrid">
        <Grid className="sedes" item sm={6} xs={12}>
          <div className="sedesContainer">
            <h2>Sedes</h2>
            <hr />
            <h4>Maturín</h4>
            <p>
              +58 414 991 7175
              <br />
              Octavioasapchi@gmail.com
              <br />
              Ubicado en Lorem Ipsum
            </p>
            <hr />
            <h4>Merida</h4>
            <p>
              +58 414 991 7175
              <br /> Octavioasapchi@gmail.com
              <br />
              Ubicado en Lorem Ipsum
            </p>
            <hr />
            <h4>Caracas</h4>
            <p>
              +58 414 991 7175
              <br /> Octavioasapchi@gmail.com
              <br />
              Ubicado en Lorem Ipsum
            </p>
          </div>
        </Grid>
        <Grid className="quoteImg" item sm={6} xs={Hidden}></Grid>
      </Grid>
    </div>
  );
}

export default Sedes;
