import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../data/main-page-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/*function MyPostsContainer(props) {
  let state = props.store.getState();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }
  let onPostChange = (text) => {
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (<MyPosts updateNewPostTextActionCreator={onPostChange}
                   addPostActionCreator={addPost}
                   postsData={state.mainPage.postsData}
                   newPostText={state.mainPage.newPostText}/>)
}*/

const mapStateToProps = (state) => {
  return {
    postsData: state.mainPage.postsData,
    newPostText: state.mainPage.newPostText,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPostActionCreator: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostTextActionCreator: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;