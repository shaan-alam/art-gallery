import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";

const App = () => {
  return (
    <Switch>
      <Route path="/signup" component={Signup} exact />
    </Switch>
  );
};

export default App;
