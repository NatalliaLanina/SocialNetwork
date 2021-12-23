import './App.css';
import News from "./components/News/News";
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import MessagesContainer from "./components/Messages/MessagesContainer";
import NavContainer from "./components/Nav/NavContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import MainContainer from "./components/Main/MainContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import store from "./data/redux-store";

function App() {
  return (
    <div className="app-wrapper">
      <HeaderContainer store={store}/>
      <NavContainer/>
      <div className="app-wrapper-content">
        <Route path='/main/:userId?'
               render={() => <MainContainer/>}/>
        <Route path='/messages'
               render={() => <MessagesContainer/>}/>
        <Route path='/news'
               render={() => <News/>}/>
        <Route path='/friends'
               render={() => <FriendsContainer/>}/>
        <Route path='/settings'
               render={() => <Settings/>}/>
        <Route path='/login'
               render={() => <Login/>}/>
      </div>
    </div>
  );
}

export default App;
