import React, { useState } from "react";
import "./navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Menu, MenuItem } from "@material-ui/core";
function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="navBar">
      <h3>ONIX</h3>
      <div>
        <button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon />
        </button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Sedes</MenuItem>
          <MenuItem onClick={handleClose}>Nosotros</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default NavBar;
