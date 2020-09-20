import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <button>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.4167 11.4286H11.8453V20H8.98812V11.4286H0.416687V8.57143H8.98812V0H11.8453V8.57143H20.4167V11.4286Z" />
          </svg>
        </button>
      </div>
    );
  }
}

export default NavBar;
