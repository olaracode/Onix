import React from "react";
import { Button, Paper, TextField, Grid } from "@material-ui/core";
import "./form.css";
function Form() {
  const fakeSubmit = (e) => {
    e.preventDefault();
    return window.alert(
      "Su mensaje fue enviado. Nos pondremos en contacto pronto"
    );
  };
  return (
    <div className="modalContainer">
      <Paper elevation={24} className="formCard">
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className="formContainer">
              <h3>Ingrese sus datos y pronto nos pondremos en contacto</h3>
              <form onSubmit={fakeSubmit} className="form">
                <div className="inputDiv">
                  <TextField
                    className="formInput"
                    id="outlined-basic"
                    label="Nombre"
                    variant="outlined"
                  />
                </div>
                <div className="inputDiv">
                  <TextField
                    className="formInput"
                    id="outlined-basic"
                    label="Correo"
                    variant="outlined"
                  />
                </div>
                <div className="inputDiv">
                  <TextField
                    className="formInput"
                    id="outlined-basic"
                    label="Telefono"
                    variant="outlined"
                  />
                </div>
                <div className="inputDiv">
                  <TextField
                    className="formInput"
                    id="outlined-basic"
                    label="Descripción"
                    multiline
                    variant="outlined"
                  />
                </div>
                <div className="buttonDiv">
                  <div className="formButton">
                    <Button type="submit" variant="contained" color={"primary"}>
                      Enviar
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </Grid>
          <Grid item sm={6} className="formImage"></Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Form;
