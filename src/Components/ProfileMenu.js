import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { FaUser, FaUserPlus } from 'react-icons/fa';
import { MdExitToApp, MdPlaylistAdd } from "react-icons/md";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const StyledMenu = withStyles({
  paper: {
    borderRadius: '10px',
    marginTop: '5px'
  },
})((props) => (
  <Menu
    elevation={5}
    anchorPosition={{ top: 300, left: 400 }}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top ",
      horizontal: "center"
    }}
    {...props}
  />
));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  function createMenuItem(icon, text, path) {
    return (
      <Link to={`/${path}`} style={{ textDecoration: "none", color: "#202020" }}>
        <MenuItem onClick={handleClose}>
          <ListItemIcon style={{ color: "#202020", fontSize: "24px" }}>
            {icon}
          </ListItemIcon>
          <ListItemText>
            {text}
          </ListItemText>
        </MenuItem>
      </Link>
      
    )
  }
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })


  return (
    <div className="header-icon">
      <FaUser aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick} />


      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {createMenuItem(FaUserPlus(), 'Sign Up', 'SignUp')}
        {createMenuItem(FaUser(), 'Sign In', 'SignUp')}
        {createMenuItem(MdPlaylistAdd(), 'Creator', 'Creator')}
        {createMenuItem(MdExitToApp(), 'Log Out', 'Creator')}
      </StyledMenu>
    </div>
  );
}
