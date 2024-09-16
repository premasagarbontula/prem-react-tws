import React, { useState } from "react";
import "./index.css";
function Header() {
  let [searchItem, setSearchItem] = useState("");
  onSearch = (e) => {
    setSearchItem(e.target.value);
  };
  return (
    <nav className="header-nav">
      <h1>MEALS FINDER APP</h1>
      <input type="search" placeholder="Search Meal" onClick={onSearch} />
    </nav>
  );
}
export default Header;
