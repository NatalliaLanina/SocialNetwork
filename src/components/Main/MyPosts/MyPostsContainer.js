import {addPost, updateNewPostText} from "../../../data/main-page-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    postsData: state.mainPage.postsData,
    newPostText: state.mainPage.newPostText,
  }
}
const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  updateNewPostText,
})(MyPosts);

export default MyPostsContainer;



/*const mapDispatchToProps = (dispatch) => {
  return {
    addPostActionCreator: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostTextActionCreator: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  }
}*/