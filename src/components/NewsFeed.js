import React from "react";
import News from "./News";
import NewsFeedSearch from "./NewsFeedSearch";

function NewsFeed() {
  return (
    <div className="news-feed">
      <NewsFeedSearch />
      <News name="Balrog" comment="I will get you!" />
      <News name="Gandalf" comment="You shall not pass!" />
      <News name="Gollum" comment="My precious.." />
    </div>
  );
}

export default NewsFeed;
