import React from "react";
import {Link} from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})((props) => (
  <Menu
    elevation={0}
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

const StyledMenuItem = withStyles((theme) => ({}))(MenuItem);



export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  function createMenuItem(icon, text, path){
    return (
       <Link to={`/${path}`}>
        <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              {icon}
            </ListItemIcon>
            <ListItemText>
              {text}
            </ListItemText>
        </StyledMenuItem>
      </Link>
    )
}
const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })


  return (
    <div  className="header-icon">
      
        
      
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
        {createMenuItem(FaUser(),'Sign Up', 'SignUp' )}
      </StyledMenu>
    </div>
  );
}
