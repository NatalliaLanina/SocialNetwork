import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
//import Preloader from "../common/Preloader/Preloader";
import Header from "./Header";
import {setUserData} from "../../data/auth-reducer";


class HeaderContainer extends React.Component {

  componentDidMount() {
    /*this.props.setIsFetching(true);*/
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
      if(response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
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
