import { Route, Switch } from "react-router-dom";
import { Home, Averages, AllData } from "./pages";
import { Filter, MeasurementCard } from "./components";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/averages" exact component={Averages} />
      <Route path="/all-data" exact component={AllData} />
      <Route path="/filter" exact component={Filter} />
    </Switch>
  );
};

export default Routes;
