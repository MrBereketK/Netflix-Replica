import React, { useEffect, useState } from "react";
import "./Header.css";
import netflix_logo_5 from "../../assets/netflix last logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Header() {
const [show, setShow] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  return (
    <div className={`header_outer_container ${show ? "nav_black" : ""}`}>
      <div className="header_container">
        <div className="header_left">
          <img src={netflix_logo_5} alt="Netflix Logo" />

          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        <div className="header_right">
          <SearchIcon />
          <NotificationsActiveIcon />
          <AccountBoxIcon />
          <ArrowDropDownIcon />
        </div>
      </div>
    </div>
  );
}
