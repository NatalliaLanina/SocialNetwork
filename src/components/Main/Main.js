
import MainInfo from "./MainInfo/MainInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


function Main(props) {

  return (
    <main>
      <MainInfo profile={props.profile}/>
      <MyPostsContainer />
     </main>
  );
}

export default Main;