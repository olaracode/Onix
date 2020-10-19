import React from "react";
import LandingPage from "./landing/LandingPage";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
