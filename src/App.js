import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Messages from "./components/Messages/Messages";
import Main from "./components/Main/Main";
import News from "./components/News/News";
import {Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import Settings from "./components/Settings/Settings";



function App(props) {
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav data={props.state.nav}/>
      <div className="app-wrapper-content">
        <Route path='/main'
               render={() => <Main
                 data={props.state.mainPage}
                 addPost={props.addPost}
                 updateNewPostText={props.updateNewPostText}/>}/>
        <Route path='/messages'
               render={() => <Messages
                 newMessageText={props.state.messagesPage.newMessageText}
                 data={props.state.messagesPage}
                 addMessage={props.addMessage}
                 updateNewMessageText={props.updateNewMessageText}/>}/>
        <Route path='/news' render={() => <News/>}/>
        <Route path='/friends' render={() => <Friends/>}/>
        <Route path='/settings' render={() => <Settings/>}/>
      </div>
    </div>
  );
}


export default App;
