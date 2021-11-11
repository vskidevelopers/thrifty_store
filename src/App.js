import Landing_pg from "./pages/Landing_pg";
import Login from "./Auth/Login";
import Shop from "./pages/Shop";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing_pg} />
        <Route exact path="/shop" component={Shop}></Route>
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
