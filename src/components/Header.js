import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>
          <span>air</span>vironment
        </h1>
      </Link>
      <div className="nav">
        <span>ALL DATA</span>
        <Link to="/averages">
          <span>AVERAGES</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
