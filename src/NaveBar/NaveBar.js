import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Typography, Button } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

// .........Drawer........./////
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    // backgroundColor: '#232323',
  },
  maincontainer: {
    backgroundColor: "#243028",
  },
  innercontainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchcontainer: {
    // width: "40%",
    display: "flex",
    flexGrow: 0.2,
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    // background:'#fff',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  link: {
    color: "#fff",
  },
  mobilelink: {
    color: "#232323",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    // color: "inherit",
    border: " 2px solid #fff",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  Menu: {
    color: "#fff",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const NaveBar = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to="/admin">Dish1 seller</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/aboutseller">add Dish </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        {" "}
        <Link to="/seller"> sellerPortal</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        {" "}
        {/* <Link to="/addproduct"> seller form</Link> */}
      </MenuItem>

      <MenuItem onClick={handleMenuClose}>
        {" "}
        <Link to="/delaveryboy"> Dish3</Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <div>
          <Button
            className={classes.mobilelink}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Dishes
          </Button>
        </div>
      </MenuItem>
      <MenuItem>
        <Button color="inherit" onClick={handleMenuClose}>
          <Link className={classes.mobilelink} to="/">
            Home
          </Link>
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color="inherit" onClick={handleMenuClose}>
          <Link className={classes.mobilelink} to="/about">
            About
          </Link>
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color="inherit" onClick={handleMenuClose}>
          <Link className={classes.mobilelink} to="/contactus">
            ContactUs
          </Link>
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color="inherit" onClick={handleMenuClose}>
          <Link className={classes.mobilelink} to="/sellerportal">
            Become a Seller
          </Link>
        </Button>
      </MenuItem>

      <MenuItem>
        {" "}
        <Button color="inherit" onClick={handleMenuClose}>
          <Link className={classes.mobilelink} to="/login">
            Login
          </Link>
        </Button>
      </MenuItem>
    </Menu>
  );
  const ref = React.createRef();

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.maincontainer}>
        <Toolbar className={classes.innercontainer}>
          <div className={classes.searchcontainer}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <Link to="/">
                <img src="/images/simple-house-logo.png" alt="logo not found" />
              </Link>{" "}
              {/* <MenuIcon /> */}
            </IconButton>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon style={{ color: "#232323" }} />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
          <div className={classes.sectionDesktop}>
            <div>
              <Button
                className={classes.Menu}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                Dishes
              </Button>
            </div>

            <Button color="inherit">
              <Link className={classes.link} to="/">
                Home
              </Link>
            </Button>
            <Button color="inherit">
              <Link className={classes.link} to="/about">
                About
              </Link>
            </Button>
            <Button color="inherit">
              <Link className={classes.link} to="/contactus">
                ContactUs
              </Link>
            </Button>
            <Button color="inherit">
              <Link className={classes.link} to="/sellerportal">
                Become a seller
              </Link>
            </Button>

            <Button color="inherit">
              <Link className={classes.link} to="/login">
                Login
              </Link>
            </Button>
            <Button color="inherit">
              <Link className={classes.link} to="/signup">
                Signup
              </Link>
            </Button>
          </div>
          {/* ............. */}
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
          <div>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Link to="cartproducts">
                <Badge badgeContent={1} color="secondary">
                  <AddShoppingCartIcon />
                </Badge>
              </Link>
            </IconButton>
            {/* <p >Cart</p> */}
          </div>

          {/* ............. */}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default NaveBar;
