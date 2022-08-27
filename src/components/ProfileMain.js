import React from "react";

function ProfileMain() {
  return (
    <div className="profile-main">
      <div className="profile-main-top">
        <h3>Profile Main</h3>
      </div>
      <div className="profile-main-bottom">
        <div>
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
