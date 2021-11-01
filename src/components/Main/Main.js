import MyPosts from './MyPosts/MyPosts';
import MainInfo from "./MainInfo/MainInfo";


function Main(props) {
  return (
    <main>
      <MainInfo/>
      <MyPosts
        postsData={props.data.postsData}
        dispatch={props.dispatch}
        newPostText={props.data.newPostText}
        />
     </main>
  );
}

export default Main;