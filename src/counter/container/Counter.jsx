import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { 
  decrementCounter as decrementCounterAction, 
  incrementCounter as incrementCounterAction
} from "../../redux/counter/counterActions";

const propTypes = {
  value: PropTypes.number,
  incrementCounter: PropTypes.function,
  decrementCounter: PropTypes.function
};
const defaultProps = {
  value: 0,
  incrementCounter: () => null,
  decrementCounter: () => null
};

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

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps; 

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
