import React from "react";
import defaultProfileImage from "./../img/defaultProfileImage.jpg";

function SideBarItem() {
  return (
    <div className="side-bar-item">
      <div className="side-bar-left-column">
        <div className="side-bar-item-pic">
          <img src={defaultProfileImage} alt="default profile image" />
        </div>
      </div>
      <div className="side-bar-right-column">
        <div className="side-bar-item-name">
          <strong>Name</strong>
        </div>
        <div className="side-bar-item-button">
          <button>Button</button>
        </div>
      </div>
    </div>
  );
}

export default SideBarItem;
