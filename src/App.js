import logo from "./logo.svg";
import "./App.scss";
import { Home } from "./pages";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Router";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
