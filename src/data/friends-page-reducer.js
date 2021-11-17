const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
  friendsData: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
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
    default:
      return state;
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setFriendsAC = (users) => ({type: SET_FRIENDS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (count) => ({type: SET_TOTAL_USERS_COUNT, count});

export default friendsPageReducer;

/*{id: 1, name: 'Friend 1', avatar: 'https://cdn-icons-png.flaticon.com/512/5547/5547473.png' , followed: true, status: 'fine', location: {city: 'Minsk', country: 'Belarus'}},
  {id: 2, name: 'Friend 2', avatar: 'https://cdn-icons-png.flaticon.com/512/5547/5547473.png' , followed: true, status: 'ok', location: {city: 'Prague', country: 'Cech republic'}},
  {id: 3, name: 'Friend 3', avatar: 'https://cdn-icons-png.flaticon.com/512/5547/5547473.png' , followed: false, status: '', location: {city: 'Kiev', country: 'Ukraine'}},
  {id: 4, name: 'Friend 4', avatar: 'https://cdn-icons-png.flaticon.com/512/5547/5547473.png' , followed: false, status: 'fck u', location: {city: 'Minsk', country: 'Belarus'}},
  {id: 5, name: 'Friend 5', avatar: 'https://cdn-icons-png.flaticon.com/512/5547/5547473.png' , followed: false, status: 'walking', location: {city: 'Minsk', country: 'Belarus'}},*/