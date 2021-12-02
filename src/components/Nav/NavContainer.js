import Nav from "./Nav";
import {connect} from "react-redux";
import {compose} from "redux";


const mapStateToProps = (state) => {
  return {
    navData: state.nav.navData,
  }
}
const mapDispatchToProps = () => {
  return {

  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Nav);

