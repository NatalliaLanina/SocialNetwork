import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import state, {addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText} from "./data/state";


let reRenderAll = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText} addMessage={addMessage} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


reRenderAll(state);
subscribe(reRenderAll);


reportWebVitals();
