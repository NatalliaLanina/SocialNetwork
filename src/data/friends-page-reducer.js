import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  friendsData: [],
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
}

const friendsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        friendsData: state.friendsData.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true};
          }
          return user;
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        friendsData: state.friendsData.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false};
          }
          return user;
        }),
      }
    case SET_FRIENDS:
      return {
        ...state,
        friendsData: action.users,
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    default:
      return state;
  }
}

export const followUser = (userId) => ({type: FOLLOW, userId});
export const unfollowUser = (userId) => ({type: UNFOLLOW, userId});
export const setFriends = (users) => ({type: SET_FRIENDS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

//thunks
export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setIsFetching(true));
  dispatch(setCurrentPage(currentPage));
  let data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setIsFetching(false));
  dispatch(setFriends(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
}

export const follow = (userId) => async (dispatch) => {
  let data = await usersAPI.follow(userId);
  if (data.resultCode === 0) {
    dispatch(followUser(userId))
  }
}

export const unfollow = (userId) => async (dispatch) => {
  let data = await usersAPI.unfollow(userId)
  if (data.resultCode === 0) {
    dispatch(unfollowUser(userId))
  }
}


export default friendsPageReducer;