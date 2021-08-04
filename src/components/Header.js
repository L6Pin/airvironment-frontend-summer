import { Link } from "react-router-dom";
import { PlusIcon } from "../assets/icons";
import { Filter } from "./index";
import React, { useState } from "react";

const Header = () => {
  const [filterShow, setFilterShow] = useState(false);

  return (
    <>
      <div className="header">
        <div className="header-container">
          <Link to="/">
            <h1>
              <span>air</span>vironment
            </h1>
          </Link>
          <div className="nav">
            <Link to="/all-data">
              <span>ALL DATA</span>
            </Link>
            <Link to="/averages">
              <span>AVERAGES</span>
            </Link>
          </div>
        </div>
        {filterShow && <Filter />}
        <PlusIcon
          className={`openCloseFilter ${filterShow ? "" : "filterOpen"}`}
          onClick={() => setFilterShow(!filterShow)}
        />
      </div>
    </>
  );
};

export default Header;
