import React from "react";
import ImageOne from "../images/egg.jpg";
import ImageTwo from "../images/egg-2.jpg";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img
          src={ImageOne}
          alt="egg1"
          className="h-full rounded mb-20 shadow  "
        />
        <div className="center-content">
          <h1 className="text-2xl mb-2">Egg Muffins</h1>
          <p className="mb-2"> Cripsy, delicious, and nutritious</p>
          <span>$16</span>
        </div>
      </div>

      <div className="menu-card">
        <img
          src={ImageTwo}
          alt="egg1"
          className="h-full rounded mb-20 shadow  "
        />
        <div className="center-content">
          <h1 className="text-2xl mb-2">Egg Salad</h1>
          <p className="mb-2"> Cripsy, delicious, and nutritious</p>
          <span>$18</span>
        </div>
      </div>
    </>
  );
};

export default Content;
