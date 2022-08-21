import React from "react";

function SideBarItem() {
  return (
    <div className="side-bar-item">
      <div className="side-bar-left-column">
        <div className="side-bar-item-pic">Picture</div>
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
