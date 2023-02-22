import React from "react";
import { Route,Switch, Redirect} from "react-router-dom";
import Header from "./bodyContent/Header/Header";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import RegistrationForm from "./pages/RegistrationForm"
import Members from "./pages/Members";
import Team from "./pages/Team";

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
            <Home />
          </Route>
          <Route path="/objectives" exact>
            <Home />
          </Route>
          <Route path="/gallery" exact>
            <Home />
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
