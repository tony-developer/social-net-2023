import React from 'react';
import classes from './Profile.module.css'

const Profile = () => {
  return (
      <div>
        <div className={classes.content}>
          <img src="https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        </div>
        <div>avatar + description</div>
        <div> My posts
          <div>
            New post
          </div>
          <div className={classes.posts}>
            <div className={classes.item}>
              Post1
            </div>
            <div className={classes.item}>
              Post2
            </div>
          </div>
        </div>
      </div>
  );
};

export default Profile;