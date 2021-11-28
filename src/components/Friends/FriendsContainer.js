import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, unfollow} from "../../data/friends-page-reducer";
import React from "react";
import Friends from "./Friends";
import Preloader from "../common/Preloader/Preloader";


class FriendsContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (page) => {
    this.props.getUsers(page, this.props.pageSize);
    this.props.setCurrentPage(page);
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Friends onPageChanged={this.onPageChanged}
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               friendsData={this.props.friendsData}
               follow={this.props.follow}
               unfollow={this.props.unfollow}

      />
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    friendsData: state.friendsPage.friendsData,
    pageSize: state.friendsPage.pageSize,
    totalUsersCount: state.friendsPage.totalUsersCount,
    currentPage: state.friendsPage.currentPage,
    isFetching: state.friendsPage.isFetching,
  }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  getUsers
})(FriendsContainer);

