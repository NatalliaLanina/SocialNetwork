import Main from "./Main";
import React from "react";
import {connect} from "react-redux";
import {getProfile} from "../../data/main-page-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirect";


class MainContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId);
  }
  render() {
    return (
      <Main {...this.props} profile={this.props.profile}/>
    )
  }
}

let AuthRedirectComponent = withAuthRedirect(MainContainer);

let mapStateToProps = (state) => ({
  profile: state.mainPage.profile,
})


let UrlContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getProfile})(UrlContainerComponent);