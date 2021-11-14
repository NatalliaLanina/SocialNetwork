import Nav from "./Nav";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
  return {
    navData: state.nav.navData,
  }
}
const mapDispatchToProps = () => {
  return {

  }
}


const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer;

