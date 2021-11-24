import {connect} from "react-redux";
import React from "react";
//import Preloader from "../common/Preloader/Preloader";
import Header from "./Header";
import {setUserData} from "../../data/auth-reducer";
import {usersAPI} from "../../api/api";


class HeaderContainer extends React.Component {

  componentDidMount() {
    /*this.props.setIsFetching(true);*/
    usersAPI.getAuth().then(data => {
      if(data.resultCode === 0) {
        let {id, email, login} = data.data;
        this.props.setUserData(id, email, login);
      }
    });
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

export default connect(mapStateToProps, {setUserData})(HeaderContainer);
