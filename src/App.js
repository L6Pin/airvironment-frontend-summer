import logo from "./logo.svg";
import "./App.scss";
import { Home } from "./pages";
import Header from "./components/Header";
import Form from "./Form";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
