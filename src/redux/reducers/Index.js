import { combineReducers } from "redux";
import navBar from "./navBar";
import topBar from "./topBar";
import rightDrawer from "./rightDrawer";

const rootReducer = combineReducers({
  /* navBar, */
  topBar,
  /* rightDrawer, */
});

export default rootReducer;
