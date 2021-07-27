import * as actionTypesMain from "./actionType";

export function getDashBoardListSuccess(observation) {
  return {
    type: actionTypesMain.DASHBOARD_SUCCESS,
    payload: observation,
  };
}

export function getObservation() {
  return function (dispatch) {
    // const BASE_URL = process.env.API_URL;
    // let url = `${BASE_URL}/lastObsM`;
    restart();

    async function restart() {
      await fetch("http://test")
        .then((res) => res.json())
        .then((response) => dispatch(getDashBoardListSuccess(response)));
    }

    //10 minutes restart call
    setInterval(restart, 1000 * 60 * 10);
  };
}
