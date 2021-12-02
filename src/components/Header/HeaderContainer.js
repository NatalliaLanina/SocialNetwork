import {connect} from "react-redux";
import React from "react";
//import Preloader from "../common/Preloader/Preloader";
import Header from "./Header";
import {getAuth, setUserData} from "../../data/auth-reducer";
import {compose} from "redux";


class HeaderContainer extends React.Component {

  componentDidMount() {
    /*this.props.setIsFetching(true);*/
    this.props.getAuth();
  }

  render() {
    return <>
      {/*{this.props.isFetching ? <Preloader/> : null}*/}
      <Header {...this.props}/>
    </>
  }
}

const mapStateToProps = (state) => {
  return {
      isAuth: state.auth.isAuth,
      login: state.auth.login,
  }
}

export default compose(
  connect(mapStateToProps, {setUserData, getAuth})
)(HeaderContainer);
