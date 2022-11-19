import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...initialState,
      counter: state.counter + 1,
      // showCounter: state.showCounter };
    };
  }

  if (action.type === "increaseBy5") {
    return {
      ...initialState,
      counter: state.counter + action.amount,
      // showCounter: state.showCounter,
    };
  }

  if (action.type === "decreaseBy5") {
    return {
      ...initialState,
      counter: state.counter - action.amount,
      // showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      ...initialState,
      counter: state.counter - 1,
      // showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      ...initialState,
      showCounter: !state.showCounter,
      // counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
