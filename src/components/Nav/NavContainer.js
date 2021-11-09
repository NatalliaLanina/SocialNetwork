import Nav from "./Nav";
import {connect} from "react-redux";



/*function Nav(props) {

  let navElements = props.data.navData.map(el => (
    <NavFriend name={el.name} id={el.id} img={el.img}/>
  ));

  return (

  );
}*/

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

