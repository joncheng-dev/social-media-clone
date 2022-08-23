import React from "react";

function Header() {
  return (
    <div className="header">
      <div class="topnav">
        <a class="active" href="#home">
          Home
        </a>
        <a href="#about">Notifications</a>
        <a href="#contact">Messages</a>
        <input type="text" placeholder="Search.."></input>
      </div>
      {/* <div className="btn-group">
        <button>Home</button>
        <button>Notifications</button>
        <button>Messages</button>
      </div>
      <div className="">

      </div> */}
    </div>
  );
}

export default Header;
