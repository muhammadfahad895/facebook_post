import React from "react";
import profilePic from "../../profilepic.jpg";
// /home/webdev/repos/facebook_post/src/profilepic.jpg

const FacebookPost = () => {
  return (
    <>
      <div className="post-header">
        <img src={profilePic} alt="" className="profile-pic" />
        <div className="fb-post">
          <p className="profile-name">Elon Musk</p>
        </div>
        <p className="post-description">
          I wish the media would stop flattering me all time … it’s a bit much
          guys ☺️
        </p>
      </div>
    </>
  );
};

export default FacebookPost;
