import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const Header = () => {
    let activeStyle = {
        textDecoration: "none",
      };
    
      let activeClassName = "underline";
    return (
        <div>
            <h1>Welcome to react router</h1>
            <nav>
            <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Home
          </NavLink>
            <NavLink
            to="/friends"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Friends
          </NavLink>
            <NavLink
            to="/posts"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Posts
          </NavLink>
            <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            About
          </NavLink>
                
            </nav>
        </div>
    );
};

export default Header;