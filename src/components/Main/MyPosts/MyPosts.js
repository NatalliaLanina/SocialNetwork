import myPostsClass from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {Field, Form} from "react-final-form";
import {composeValidators, maxLength, required} from "../../../utilities/validators/validators";
import {Element} from "../../common/FormControls/FormControls";


const Textarea = Element("textarea");

const MyPosts = props => {
  let postsElement = props.postsData.map(post =>
    (<Post key={post.id} message={post.message} likes={post.likes}/>));   //create massive of posts
  const onSubmit = (values) => {
    props.addPost(values.newPostText)
  }
  return (
    <div className={myPostsClass.content}>
      <MyPostsForm onSubmit={onSubmit}/>
      <h3>My posts</h3>
      <div className={myPostsClass.my_posts}>
        {postsElement}
      </div>
    </div>
  );
};

const MyPostsForm = (props) => {
  return <Form
    initialValues={{
      newPostText: '',
    }}
    onSubmit={props.onSubmit}
    validate={values => {
    }}
    render={({handleSubmit, submitting}) => (
      <form onSubmit={handleSubmit} action="">
        <div>
          <Field
            name="newPostText"
            type='textarea'
            component={Textarea}
            placeholder='add post'
            validate={composeValidators(required, maxLength(30))}/>
        </div>
        <div>
          <button disabled={submitting} type="submit">Add post</button>
        </div>
      </form>
    )}
  />
}

export default MyPosts;