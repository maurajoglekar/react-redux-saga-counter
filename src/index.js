import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./configureStore";
import Counter from "./counter/container/Counter";
import "./styles.css";

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById("root"));
