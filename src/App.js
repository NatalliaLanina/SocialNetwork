import './App.css';
import Header from './components/Header/Header';
import News from "./components/News/News";
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import MessagesContainer from "./components/Messages/MessagesContainer";
import NavContainer from "./components/Nav/NavContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import MainContainer from "./components/Main/MainContainer";

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <NavContainer/>
      <div className="app-wrapper-content">
        <Route path='/main'
               render={() => <MainContainer/>}/>
        <Route path='/messages'
               render={() => <MessagesContainer/>}/>
        <Route path='/news'
               render={() => <News/>}/>
        <Route path='/friends'
               render={() => <FriendsContainer/>}/>
        <Route path='/settings'
               render={() => <Settings/>}/>
      </div>
    </div>
  );
}


export default App;
