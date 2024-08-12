import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./redux/actions/action";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <nav className="navbar">
        <h1 className="heading">React Redux!</h1>
      </nav>
      <div className="subContainer">
        <h1 className="headingRedux">Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>
        <div>
          <a
            className="quantity-minus"
            title="Decrement"
            onClick={() => dispatch(decNumber(5))}
          >
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity-input"
            value={myState}
          />
          <a
            className="quantity-plus"
            title="Increment"
            onClick={() => dispatch(incNumber(5))}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
