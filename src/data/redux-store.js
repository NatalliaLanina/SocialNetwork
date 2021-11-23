import {combineReducers, createStore} from "redux";
import mainPageReducer from "./main-page-reducer";
import messagePageReducer from "./message-page-reducer";
import navReducer from "./nav-reducer";
import friendsPageReducer from "./friends-page-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
  mainPage: mainPageReducer,
  messagesPage: messagePageReducer,
  nav: navReducer,
  friendsPage: friendsPageReducer,
  auth: authReducer,
})

let store = createStore(reducers);


window.store = store;
export default store;

