import * as actionTypes from "../actions/actionType";
import initialState from "./initialState";

export default function dashboardListReducer(
  state = initialState.observation,
  action
) {
  switch (action.type) {
    case actionTypes.DASHBOARD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
