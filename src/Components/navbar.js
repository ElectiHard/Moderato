import { Link } from 'react-router-dom'
import IconButton from "@material-ui/core/IconButton";
import TextField from '@material-ui/core/TextField';
import CustomizedMenus from "./ProfileMenu"
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';


import '../App.css';
import './navbar.css'

export default function navBar() {
    return (
        <div className="header">

            <Link to="/" className="logo">
                Moderato
            </Link>
            <div className="searchbar">
            <TextField
                className="searchbar inputRounded MuiOutlinedInput-root"
                placeholder="Type to search for products"
                className="inputRounded"
                placeholder="Search"
                variant="outlined"
                size="small"
                fullWidth
                margin="none"
                InputProps={{
                    startAdornment:
                    <InputAdornment>
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>,
                  }}
            />
            </div>
            <div className="icons">
                <div classname="login">
                    <CustomizedMenus />
                </div>
            </div>
        </div>
    )
}