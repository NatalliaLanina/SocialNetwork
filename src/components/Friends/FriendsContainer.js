import {connect} from "react-redux";
import {follow, setCurrentPage, setFriends, setIsFetching, setTotalUsersCount, unfollow} from "../../data/friends-page-reducer";
import React from "react";
import * as axios from "axios";
import Friends from "./Friends";
import Preloader from "../common/Preloader/Preloader";


class FriendsContainer extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
      withCredentials: true
    }).then(response => {
      this.props.setIsFetching(false);
      this.props.setFriends(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChanged = (page) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
      withCredentials: true
    }).then(response => {
      this.props.setIsFetching(false);
      this.props.setFriends(response.data.items);
    });
  };

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
  setFriends,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching})(FriendsContainer);


/*
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setFriends: (users) => {
      dispatch(setFriendsAC(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(setIsFetchingAC(isFetching))
    }
  }
}
*/