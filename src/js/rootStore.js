import { createStore } from "redux";
// import rootReducer from "./rootReducer";

function rootReducer() {
  return {
    test: "D"
  };
}
const rootStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default rootStore;
