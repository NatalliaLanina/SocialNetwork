
import MainInfo from "./MainInfo/MainInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


function Main(props) {

  return (
    <main>
      <MainInfo/>
      <MyPostsContainer store={props.store} dispatch={props.dispatch}/>
     </main>
  );
}

export default Main;