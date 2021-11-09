import './App.css';
import Header from './components/Header/Header';
import Main from "./components/Main/Main";
import News from "./components/News/News";
import {Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import Settings from "./components/Settings/Settings";
import MessagesContainer from "./components/Messages/MessagesContainer";
import NavContainer from "./components/Nav/NavContainer";


function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <NavContainer/>
      <div className="app-wrapper-content">
        <Route path='/main'
               render={() => <Main/>}/>
        <Route path='/messages'
               render={() => <MessagesContainer/>}/>
        <Route path='/news' render={() => <News/>}/>
        <Route path='/friends' render={() => <Friends/>}/>
        <Route path='/settings' render={() => <Settings/>}/>
      </div>
    </div>
  );
}


export default App;
