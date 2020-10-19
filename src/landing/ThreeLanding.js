import React from "react";
import { Grid, Hidden, Paper } from "@material-ui/core";
import "./landingBody.css";

function ThreeLanding() {
  return (
    <div className="threeContainer">
      <Paper className="firstPaper" elevation={20}>
        <Grid container>
          <Grid item sm={4} xs={12}>
            <div className="threetexto">
              <h3>Arquitectura</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu
                neque vulputate diam rhoncus faucibus. Curabitur quis varius
                libero. Lorem.
              </p>
            </div>
          </Grid>
          <Grid item sm={4} xs={12}>
            <div className="threetexto special">
              <h3>Construcción</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu
                neque vulputate diam rhoncus faucibus. Curabitur quis varius
                libero. Lorem.
              </p>
            </div>
          </Grid>
          <Grid item sm={4} xs={12}>
            <div className="threetexto">
              <h3>Remodelaciones</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu
                neque vulputate diam rhoncus faucibus. Curabitur quis varius
                libero. Lorem.
              </p>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default ThreeLanding;
