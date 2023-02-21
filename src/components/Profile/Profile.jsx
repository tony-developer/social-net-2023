import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
      <div>
        <div className={classes.content}>
          <img src="https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        </div>
        <div>
          avatar + description
        </div>
        <MyPosts/>
      </div>
  );
};

export default Profile;