import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
        <div> My posts
          <div>
            <textarea></textarea>
            <button>Add post</button>
          </div>
          <div className={s.posts}>
            <Post message="Hi! How are you?" count=' 15'/>
            <Post message="it's my first post" count =' 20'/>
          </div>
        </div>
  );
};

export default MyPosts;