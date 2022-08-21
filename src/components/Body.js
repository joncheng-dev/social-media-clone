import React from "react";
import NewsFeed from "./NewsFeed";
import ProfileMain from "./ProfileMain";
import ProfileDetails from "./ProfileDetails";
import SideBar from "./SideBar";

function Body() {
  return (
    <div className="body">
      <div className="left">
        <ProfileMain />
        <ProfileDetails />
      </div>
      <div className="center">
        <NewsFeed />
      </div>
      <div className="right">
        <SideBar />
      </div>
    </div>
  );
}

export default Body;
