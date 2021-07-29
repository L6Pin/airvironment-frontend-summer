import { Route, Switch } from "react-router-dom";
import { Home, Averages } from "./pages";
import { MeasurementCard } from "./components";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/averages" exact component={Averages} />
    </Switch>
  );
};

export default Routes;
