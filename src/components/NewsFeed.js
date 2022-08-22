import React from "react";
import News from "./News";
import NewsFeedSearch from "./NewsFeedSearch";

function NewsFeed() {
  return (
    <div className="news-feed">
      <NewsFeedSearch />
      <News />
    </div>
  );
}

export default NewsFeed;
