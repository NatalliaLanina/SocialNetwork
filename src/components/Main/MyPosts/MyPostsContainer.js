import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../data/main-page-reducer";
import MyPosts from "./MyPosts";


function MyPostsContainer(props) {
  let state = props.store.getState();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }
  let onPostChange = (text) => {
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (<MyPosts updateNewPostTextActionCreator={onPostChange} addPostActionCreator={addPost} postsData={state.mainPage.postsData} newPostText={state.mainPage.newPostText}/>)
}

export default MyPostsContainer;