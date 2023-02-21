import React from "react";
import { Route,Switch, Redirect} from "react-router-dom";
import Header from "./bodyContent/Header/Header";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import RegistrationForm from "./pages/RegistrationForm"
import Objectives from "../src/bodyContent/Objectives/Objectives";
import Members from "./pages/Members";
import Team from "./pages/Team";
import Workshop from "./pages/Workshop";
import Blog from "./pages/Blog";
import Intro from "./bodyContent/Intro/Intro";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about" exact>
            <Intro />
          </Route>
          <Route path="/objectives" exact>
            <Objectives />
          </Route>
          <Route path="/team" exact>
            <Team />
          </Route>
          <Route path="/members" exact>
            <Members />
          </Route>
          <Route path="/registration" exact>
            <Registration />
          </Route>
          <Route path="/registration/:registerYourself" exact>
              <RegistrationForm />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
