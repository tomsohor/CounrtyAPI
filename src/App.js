import { useState } from "react";
import "./style/css/index.css";
import Navbar from "./component/Navbar";
import ActionField from "./component/ActionField";
import Country from "./component/Country";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [darkM, setDarkM] = useState(false);
  const [darkC, setDarkC] = useState("");

  function TurnOnDarkM() {
    setDarkM(!darkM);
    if (darkM === true) {
      setDarkC("Dark");
    } else {
      setDarkC("");
    }
  }

  return (
    <Router>
      <div className="App">
        <Navbar darkC={darkC} TurnOnDarkM={TurnOnDarkM} />
        <div className={`content${darkC}`}>
          <Switch>
            <Route path="/">
              <ActionField darkC={darkC} />
              <Country darkC={darkC} />
            </Route>
            <Route path="/Details/:name"></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
