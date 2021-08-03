import { Route, Switch } from "react-router-dom";
import { Home, Averages, AllData } from "./pages";
import { MeasurementCard } from "./components";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/averages" exact component={Averages} />
      <Route path="/all-data" exact component={AllData} />
    </Switch>
  );
};

export default Routes;
