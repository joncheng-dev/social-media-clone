import React from "react";
import defaultProfileImage from "./../img/defaultProfileImage.jpg";

function ProfileMain() {
  return (
    <div className="profile-main">
      <div className="profile-main-top">
        <div className="profile-main-picture">
          <img src={defaultProfileImage} alt="default profile image" />
        </div>
      </div>
      <div className="profile-main-bottom">
        <div className="profile-main-name">
          <strong>Profile Owner</strong>
        </div>
        <div className="profile-main-buttons-row">
          <button className="profile-main-buttons">TWEETS</button>
          <button className="profile-main-buttons">FOLLOWING</button>
          <button className="profile-main-buttons">FOLLOWERS</button>
        </div>
        <br />
      </div>
    </div>
  );
}

export default ProfileMain;
