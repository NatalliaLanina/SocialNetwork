import myPostsClass from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";


function MyPosts(props) {
  let postsElement = props.postsData.map(post =>
    (<Post message={post.message} likes={post.likes}/>));   //create massive of posts



  let addPostElement = React.createRef();   //create link to textarea

  let addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  }

  let onPostChange = () => {
    let text = addPostElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
  }


  return (
    <div className={myPostsClass.content}>

      <textarea onChange={onPostChange} ref={addPostElement} value={props.newPostText}/>

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