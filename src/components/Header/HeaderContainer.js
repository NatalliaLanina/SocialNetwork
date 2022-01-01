import {connect} from "react-redux";
import React from "react";
import Header from "./Header";
import {getAuth, logout, setUserData} from "../../data/auth-reducer";
import {compose} from "redux";


class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getAuth();
  }

  render() {
    return <>
      <Header
        {...this.props}
        profile={this.props.profile}
        authUserId={!this.props.authUserId}
      />
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.mainPage.profile,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}

export default compose(
  connect(mapStateToProps, {setUserData, getAuth, logout})
)(HeaderContainer);
