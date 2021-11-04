import {combineReducers, createStore} from "redux";
import mainPageReducer from "./main-page-reducer";
import messagePageReducer from "./message-page-reducer";
import navReducer from "./nav-reducer";

let reducers = combineReducers({
  mainPage: mainPageReducer,
  messagesPage: messagePageReducer,
  nav: navReducer
})

let store = createStore(reducers);

export default store;