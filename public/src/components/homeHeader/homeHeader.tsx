import React from "react";
import plus from "../../images/plus.png";
import "./homeHeader.scss";

const homeHeader = () => {
  return (
    <header className="homeHeader">
      <h1 className="homeHeader__title">Welcome</h1>
      <div className="homeHeader__newRoom">
        <img src={plus} alt="plus" />
      </div>
    </header>
  );
};

export default homeHeader;
