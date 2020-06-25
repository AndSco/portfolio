import React from "react";
import "../../styles/themeSwitch.css";


//defaultChecked={theme === "light" ? false : true}
const ThemeSwitch = ({ changeTheme, theme }) => {
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

