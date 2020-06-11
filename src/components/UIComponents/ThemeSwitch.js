import React from "react";
import "../../styles/themeSwitch.css";

const ThemeSwitch = ({ changeTheme }) => {
  return (
    <section>
      <div className="toggle-btn" id="_1st-toggle-btn">
        <input type="checkbox" onChange={changeTheme} />
        <span></span>
      </div>
    </section>
  )
}

export default ThemeSwitch;

