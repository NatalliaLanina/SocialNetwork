import Main from "./Main";
import React from "react";
import {connect} from "react-redux";
import {getProfile} from "../../data/main-page-reducer";
import {Redirect, withRouter} from "react-router-dom";


class MainContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId);
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'}/>;
    return (
      <Main {...this.props} profile={this.props.profile}/>
    )
  }

}

let mapStateToProps = (state) => ({
  profile: state.mainPage.profile,
  isAuth: state.auth.isAuth,
})


let UrlContainerComponent = withRouter(MainContainer);
export default connect(mapStateToProps, {getProfile})(UrlContainerComponent);