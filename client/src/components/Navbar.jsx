import { Link } from "react-router-dom";
import "./Navbar.css";
import { MdAccountCircle, MdSearch } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
            <Link to="/">dangerose777 shop</Link>
        </div>
        <div className="search">
            <button><MdSearch id="buttonSearch"/></button>
        </div>
        <div className="account">
            <Link to="/login"><MdAccountCircle /></Link>
        </div>
    </div>
  );
}