import React from "react";
import { connect } from "react-redux";
import { 
  decrementCounter as decrementCounterAction, 
  incrementCounter as incrementCounterAction
} from "../../redux/counter/counterActions";

function Counter({ value, incrementCounter, decrementCounter }) {
  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
        <button onClick={decrementCounter}>-</button>
        <span>{value}</span>
        <button onClick={incrementCounter}>+</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { counter } = state;
  return {
    value: counter.value
  }
};

export default connect(mapStateToProps, {
  decrementCounter: decrementCounterAction,
  incrementCounter: incrementCounterAction
})(Counter);
