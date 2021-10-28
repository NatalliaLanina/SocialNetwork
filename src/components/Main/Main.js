import MyPosts from './MyPosts/MyPosts';
import MainInfo from "./MainInfo/MainInfo";


function Main(props) {
  return (
    <main>
      <MainInfo/>
      <MyPosts
        postsData={props.data.postsData}
        addPost={props.addPost}
        newPostText={props.data.newPostText}
        updateNewPostText={props.updateNewPostText}/>
     </main>
  );
}

export default Main;