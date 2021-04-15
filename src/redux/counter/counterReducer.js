import * as types from "./counterTypes";

const initialState = {
  counter: {
    value: 0
  }
};

function counterReducer(state = initialState, action) {
  const {
    counter
  } = state;
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      return {
        ...state, counter: {
          value: counter.value + 1
        }
      };
    case types.DECREMENT_COUNTER:
      return {
        ...state, counter: {
          value: counter.value - 1
        }
      };
    default:
      return state;
  }
}

export default counterReducer;