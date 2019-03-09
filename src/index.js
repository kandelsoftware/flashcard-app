import React from "react";
import { createStore } from "redux";

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const store = createStore((state, action) => {
  switch (action.type) {
    case "Add_CARD":
      let newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date()
      });
      return Object.assign({}, state, {
        cards: state.cards ? state.cards.concat([newCard]) : [newCard]
      });
    default:
      return state || { cards: [] };
  }
});

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({
  type: "Add_CARD",
  data: {
    front: "front",
    back: "back"
  }
});
export default store;
