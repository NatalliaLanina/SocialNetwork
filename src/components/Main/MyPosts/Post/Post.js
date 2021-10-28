import PostClass from './Post.module.css';

function Post(props) {
  return (
    <div className={PostClass.item}>
        <img src="https://cdn-icons-png.flaticon.com/512/5149/5149017.png" alt='abc'/>
        {props.message}
        <div>
          <span>{props.likes} likes</span>
        </div>
        
    </div>
         
  );
}

export default Post;