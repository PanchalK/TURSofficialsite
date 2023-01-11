import React from "react";
import { Route,Switch, Redirect} from "react-router-dom";
import Header from "./bodyContent/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Registration from "./pages/Registration";
import RegistrationForm from "./pages/RegistrationForm"
import Objectives from "./pages/Objectives";
import Members from "./pages/Members";
import Team from "./pages/Team";
import Workshop from "./pages/Workshop";
import Blog from "./pages/Blog";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/TURSofficialsite/" exact>
            <Redirect to="/home"></Redirect>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/objectives" exact>
            <Objectives />
          </Route>
          <Route path="/workshop" exact>
            <Workshop />
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
          <Route path="/blog" exact>
            <Blog />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
