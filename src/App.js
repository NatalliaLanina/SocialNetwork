import './App.css';
import News from "./components/News/News";
import {Route, Switch} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import MessagesContainer from "./components/Messages/MessagesContainer";
import NavContainer from "./components/Nav/NavContainer";
import MainContainer from "./components/Main/MainContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import store from "./data/redux-store";
import React from "react";
import Preloader from "./components/common/Preloader/Preloader";
import WelcomePage from "./components/Main/WelcomePage";
// lazy import of component
const FriendsContainer = React.lazy(() => import("./components/Friends/FriendsContainer"));


function App() {
  return (
    <div className="app-wrapper">
      <HeaderContainer store={store}/>
      <NavContainer/>
      <div className="app-wrapper-content">
        <React.Suspense fallback={<Preloader/>}>
          <Switch>
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
            <Route path='/'
                   render={() => <WelcomePage/>}/>
          </Switch>
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
