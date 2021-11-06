import myPostsClass from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";


function MyPosts(props) {
  let postsElement = props.postsData.map(post =>
    (<Post message={post.message} likes={post.likes}/>));   //create massive of posts


  let addPost = () => {
    props.addPostActionCreator();
  }
  let onPostChange = (event) => {
    let text = event.target.value;
    props.updateNewPostTextActionCreator(text);
  }

  return (
    <div className={myPostsClass.content}>

      <textarea onChange={onPostChange} value={props.newPostText}/>

      <div>
        <button onClick={addPost}>Add post</button>
      </div>

      <h3>My posts</h3>
      <div className={myPostsClass.my_posts}>
        {postsElement}
      </div>

    </div>

  );
}

export default MyPosts;