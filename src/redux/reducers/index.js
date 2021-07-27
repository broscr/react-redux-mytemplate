import { combineReducers } from "redux";
import dashboardListReducer from "./dashboardListReducer";
// import settingSelectedReducer from "./settingSelectedReducer";
// import detailListReducer from "./detailListReducer";

const rootReducer = combineReducers({
  dashboardListReducer,
  // settingSelectedReducer,
  // detailListReducer,
});

export default rootReducer;
