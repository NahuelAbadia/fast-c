import { createStore } from "redux";
import index from "./reducers/Index";

const store = createStore(
  index,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export const configureStore = () => store;

export default store;
