import React from "react";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

const More = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuItemClick = (event) => {
    const { myValue } = event.currentTarget.dataset;
    props.setMoreState(myValue);
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        sx={{ color: "white" }}
        onClick={handleClick}
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          style={{ color: "#000" }}
          data-my-value={1}
          onClick={handleMenuItemClick}
        >
          Temperature
        </MenuItem>
        <MenuItem
          style={{ color: "#000" }}
          data-my-value={2}
          onClick={handleMenuItemClick}
        >
          Time
        </MenuItem>
      </Menu>
    </div>
  );
};

export default More;
