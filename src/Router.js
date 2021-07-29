import { Route, Switch } from "react-router-dom";
import { Home } from "./pages";
import { MeasurementCard } from "./components";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/1" exact component={MeasurementCard} />
    </Switch>
  );
};

export default Routes;
