import Main from "./Main";
import React from "react";
import {connect} from "react-redux";
import {setUserProfile} from "../../data/main-page-reducer";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";


class MainContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    usersAPI.getProfile(userId).then(data => {
      this.props.setUserProfile(data);
    });
  }

  render() {
    return (
      <Main {...this.props} profile={this.props.profile}/>
    )
  }

}

let mapStateToProps = (state) => ({
  profile: state.mainPage.profile,
})


let UrlContainerComponent = withRouter(MainContainer);
export default connect(mapStateToProps, {setUserProfile})(UrlContainerComponent);