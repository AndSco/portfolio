import React from "react";
import "../../styles/themeSwitch.css";

const ThemeSwitch = ({ changeTheme, theme }) => {
  return (
    <section>
      <div className="toggle-btn" id="_1st-toggle-btn">
        <input type="checkbox" onChange={changeTheme} defaultChecked={theme !== "light"} />
        <span></span>
      </div>
    </section>
  )
}

export default ThemeSwitch;

