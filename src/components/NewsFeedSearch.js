import React from "react";

function NewsFeedSearch() {
  return (
    <div className="news-feed-search">
      <div className="news-feed-user-icon">User Icon</div>
      <div className="news-feed-search-bar">
        <form>
          <input type="text" id="fname" value="What's happening?"></input>
        </form>
      </div>
    </div>
  );
}

export default NewsFeedSearch;
