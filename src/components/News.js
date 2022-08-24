import React from "react";
import defaultProfileImage from "./../img/defaultProfileImage.jpg";

function News(props) {
  return (
    <React.Fragment>
      <div className="news-item">
        <div className="news-item-left">
          <img src={defaultProfileImage} alt="default profile image" />
        </div>
        <div className="news-item-right">
          <h3>{props.name}</h3>
          <p>
            <em>{props.comment}</em>
          </p>
          <hr />
        </div>
      </div>
    </React.Fragment>
  );
}

export default News;
