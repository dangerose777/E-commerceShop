import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MdAccountCircle, MdSearch } from "react-icons/md";

export default function Navbar() {
  const [inputVisible, setInputVisible] = useState(false);
  const [animateBorder, setAnimateBorder] = useState(false);

  const toggleSearch = () => {
    if (inputVisible) {
      setAnimateBorder(false);
      setTimeout(() => setInputVisible(false), 300);
    } else {
      setInputVisible(true);
      setTimeout(() => setAnimateBorder(true), 10);
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">dangerose777 shop</Link>
      </div>

      {inputVisible && (
        <div className="searchInputHolder">
          <input type="text" id="searchInput" />
          <span className={`bottom-border ${animateBorder ? "animate" : ""}`}></span>
        </div>
      )}

      <div className={`search ${inputVisible ? "search--active" : "search--inactive"}`}>
        <button onClick={toggleSearch}>
          <MdSearch id="buttonSearch" />
        </button>
      </div>

      <div className="account">
        <Link to="/login"><MdAccountCircle /></Link>
      </div>
    </div>
  );
}