import React from "react";
import { Card, Grid } from "@material-ui/core";
import img1 from "../images/pixomatic_1572877223091.png";
import img2 from "../images/pixomatic_1572877263963.png";
import img3 from "../images/iStock_67085781_SMALL-1.jpg";
import img4 from "../images/wise.jpg";

function Talento() {
  return (
    <div className="talentoContainer">
      <div className="talentoHeader">
        <h3>Una mirada a nuestro talento</h3>
      </div>
      <Grid container spacing={3}>
        <Grid item sm={6} xs={12} lg={3}>
          <div className="talentoImgContainer">
            <img className="talentoImg" src={img1} alt="" />
            <hr />
            <h3>Lee Chang</h3>
            <p>Arquitecto</p>
          </div>
        </Grid>
        <Grid item sm={6} xs={12} lg={3}>
          <div className="talentoImgContainer">
            <img className="talentoImg" src={img3} alt="" />
            <hr />
            <h3>Johana Doe</h3>
            <p>Ingeniera</p>
          </div>
        </Grid>
        <Grid item sm={6} xs={12} lg={3}>
          <div className="talentoImgContainer">
            <img className="talentoImg" src={img2} alt="" />
            <hr />
            <h3>Jane Doe</h3>
            <p>Arquitecta/Diseñadora</p>
          </div>
        </Grid>
        <Grid item sm={6} xs={12} lg={3}>
          <div className="talentoImgContainer">
            <img className="talentoImg" src={img4} alt="" />
            <hr />
            <h3>John Doe</h3>
            <p>C.E.O</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Talento;
