import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionMainPage from ".././redux/actions/mainActions";


function Home() {
  
  return <h2>Home</h2>;
}



function mapStateToProps(state) {
  return {
    observation: state.dashboardListReducer,
    // filteredList: state.dashboardListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getObservation: bindActionCreators(
        actionMainPage.getObservation,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
