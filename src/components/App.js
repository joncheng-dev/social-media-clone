import React from "react";
import Header from "./Header";
import NewsFeed from "./NewsFeed";
import ProfileCard from "./ProfileCard";
import ProfileDetails from "./ProfileDetails";
import SideBar from "./SideBar";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ProfileCard />
      <ProfileDetails />
      <NewsFeed />
      <SideBar />
    </React.Fragment>
  );
}

export default App;
