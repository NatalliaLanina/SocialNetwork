import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from "./components/Main/Main";
import News from "./components/News/News";
import {Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import Settings from "./components/Settings/Settings";
import MessagesContainer from "./components/Messages/MessagesContainer";


function App(props) {
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav store={props.store} data={props.state.nav}/>
      <div className="app-wrapper-content">
        <Route path='/main'
               render={() => <Main
                 store={props.store}
                 dispatch={props.dispatch}
                 />}/>
        <Route path='/messages'
               render={() => <MessagesContainer
                 store={props.store}
                 dispatch={props.dispatch}
                 />}/>
        <Route path='/news' render={() => <News/>}/>
        <Route path='/friends' render={() => <Friends/>}/>
        <Route path='/settings' render={() => <Settings/>}/>
      </div>
    </div>
  );
}


export default App;
