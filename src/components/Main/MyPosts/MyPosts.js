import myPostsClass from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
/*
import {Field, Form} from "react-final-form";

const onSubmit = (values) => {
  console.log(JSON.stringify(values))
}
*/

function MyPosts(props) {
  let postsElement = props.postsData.map(post =>
    (<Post key={post.id} message={post.message} likes={post.likes}/>));   //create massive of posts


  let addPost = () => {
    props.addPost();
  }
  let onPostChange = (event) => {
    let text = event.target.value;
    props.updateNewPostText(text);
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

/*
const MyPostsForm = (props) => {
  return <Form
    initialValues={{
      login: '',
      password: '',
    }}
    onSubmit={onSubmit}
    validate={values => {}}
    render={({handleSubmit, pristine, form, submitting}) => (
      <form onSubmit={handleSubmit} action="">
        <div>
          <Field
            name="textarea"
            component="textarea"/>
        </div>
        <div>
          <button disabled={submitting} type="submit">Add post</button>
        </div>
      </form>
    )}
  />
}
*/


export default MyPosts;