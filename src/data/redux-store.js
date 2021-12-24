import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import mainPageReducer from "./main-page-reducer";
import messagePageReducer from "./message-page-reducer";
import navReducer from "./nav-reducer";
import friendsPageReducer from "./friends-page-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';



let reducers = combineReducers({
  mainPage: mainPageReducer,
  messagesPage: messagePageReducer,
  nav: navReducer,
  friendsPage: friendsPageReducer,
  auth: authReducer,

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;

