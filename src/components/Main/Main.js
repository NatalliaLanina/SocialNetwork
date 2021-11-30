import MainInfo from "./MainInfo/MainInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";


function Main(props) {
  return (
    <main>
      <MainInfo profile={props.profile}/>
      <MyPostsContainer/>
    </main>
  );
}

export default Main;