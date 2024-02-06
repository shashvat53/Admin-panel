import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Dashboard from "./Dashboard";
import { Home } from "@mui/icons-material";
import { Link, Outlet } from "react-router-dom";
import GroupIcon from "@mui/icons-material/Group";
import HubIcon from "@mui/icons-material/Hub";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ReorderIcon from "@mui/icons-material/Reorder";
import PaymentsIcon from "@mui/icons-material/Payments";
import SupportIcon from "@mui/icons-material/Support";
import CallIcon from "@mui/icons-material/Call";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyIcon from "@mui/icons-material/Key";
import LogoutIcon from "@mui/icons-material/Logout";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse } from "@mui/material";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const [dropdownOpen, setDropdownOpen] = React.useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
    dropdown5: false,
    dropdown6: false,
    dropdown7: false,
  });

  const toggleDropdown = (dropdown) => {
    setDropdownOpen((prevState) => ({
      ...Object.fromEntries(
        Object.entries(prevState).map(([key]) => [key, key === dropdown])
      ),
      [dropdown]: !prevState[dropdown],
    }));
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <div>
      <Toolbar>
        <img
          className="w-[150px]"
          src="https://www.umpteeninnovation.in/static/assets/images/logo1.png"
        />
      </Toolbar>
      {/* <Divider /> */}
      <List className=" ">
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => toggleDropdown("dropdown1")}>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText>Users</ListItemText>
            {dropdownOpen.dropdown1 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={dropdownOpen.dropdown1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/all-user">
              <ListItemText className="pl-[50px]" primary="All Users" />
            </ListItem>
            <ListItem button component={Link} to="/user-reward">
              <ListItemText className="pl-[50px]" primary="Users Reward" />
            </ListItem>
            {/* Add more dropdown items as needed */}
          </List>
        </Collapse>

        <ListItem disablePadding>
          <ListItemButton onClick={() => toggleDropdown("dropdown2")}>
            <ListItemIcon>
              <HubIcon />
            </ListItemIcon>
            <ListItemText>Network</ListItemText>
            {dropdownOpen.dropdown2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={dropdownOpen.dropdown2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/generation-team">
              <ListItemText className="pl-[50px]" primary="Generation Team" />
            </ListItem>
            <ListItem button component={Link} to="/tree">
              <ListItemText className="pl-[50px]" primary="Tree" />
            </ListItem>
            {/* Add more dropdown items as needed */}
          </List>
        </Collapse>

        <ListItem disablePadding>
          <ListItemButton onClick={() => toggleDropdown("dropdown3")}>
            <ListItemIcon>
              <CreditCardIcon />
            </ListItemIcon>
            <ListItemText>Withdrawals</ListItemText>
            {dropdownOpen.dropdown3 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={dropdownOpen.dropdown3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/withdrawals/pending">
              <ListItemText className="pl-[50px]" primary="pending" />
            </ListItem>
            <ListItem button component={Link} to="/withdrawals/approved">
              <ListItemText className="pl-[50px]" primary="Approved" />
            </ListItem>
            <ListItem button component={Link} to="/withdrawals/cancelled">
              <ListItemText className="pl-[50px]" primary="Cancelled" />
            </ListItem>
            {/* Add more dropdown items as needed */}
          </List>
        </Collapse>

        <ListItem disablePadding>
          <ListItemButton onClick={() => toggleDropdown("dropdown7")}>
            <ListItemIcon>
              <LocalOfferIcon />
            </ListItemIcon>
            <ListItemText>Products</ListItemText>
            {dropdownOpen.dropdown7 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={dropdownOpen.dropdown7} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/product/all-product">
              <ListItemText className="pl-[50px]" primary="All Products" />
            </ListItem>
            <ListItem button component={Link} to="/product/all-categories">
              <ListItemText className="pl-[50px]" primary="All Categories" />
            </ListItem>
            <ListItem button component={Link} to="/product/add-product">
              <ListItemText className="pl-[50px]" primary="Add Product" />
            </ListItem>
            {/* Add more dropdown items as needed */}
          </List>
        </Collapse>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/order">
            <ListItemIcon>
              <ReorderIcon />
            </ListItemIcon>
            <ListItemText>Order</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/income">
            <ListItemIcon>
              <PaymentsIcon />
            </ListItemIcon>
            <ListItemText>Income</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => toggleDropdown("dropdown4")}>
            <ListItemIcon>
              <CreditCardIcon />
            </ListItemIcon>
            <ListItemText>Fund</ListItemText>
            {dropdownOpen.dropdown4 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={dropdownOpen.dropdown4} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/fund/add_fund">
              <ListItemText className="pl-[50px]" primary="Add Fund" />
            </ListItem>
            <ListItem button component={Link} to="/fund/transfer_fund_history">
              <ListItemText
                className="pl-[50px]"
                primary="Transfer Fund History"
              />
            </ListItem>

            {/* Add more dropdown items as needed */}
          </List>
        </Collapse>

        <ListItem disablePadding>
          <ListItemButton onClick={() => toggleDropdown("dropdown5")}>
            <ListItemIcon>
              <SupportIcon />
            </ListItemIcon>
            <ListItemText>Support</ListItemText>
            {dropdownOpen.dropdown5 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={dropdownOpen.dropdown5} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/support/pending">
              <ListItemText className="pl-[50px]" primary="Pending" />
            </ListItem>
            <ListItem button component={Link} to="/support/approved">
              <ListItemText className="pl-[50px]" primary="Approved" />
            </ListItem>

            {/* Add more dropdown items as needed */}
          </List>
        </Collapse>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/contact_us">
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => toggleDropdown("dropdown6")}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
            {dropdownOpen.dropdown6 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={dropdownOpen.dropdown6} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/settings/general_setting">
              <ListItemText className="pl-[50px]" primary="General Settings" />
            </ListItem>
            <ListItem button component={Link} to="/settings/plan_setting">
              <ListItemText className="pl-[50px]" primary="Plan Setting" />
            </ListItem>
            <ListItem button component={Link} to="/settings/news_events">
              <ListItemText className="pl-[50px]" primary="News & Events" />
            </ListItem>

            {/* Add more dropdown items as needed */}
          </List>
        </Collapse>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/change_password">
            <ListItemIcon>
              <KeyIcon />
            </ListItemIcon>
            <ListItemText>Change Password</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/logout">
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="w-full text-right "
          >
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="text-white"
                color="inherit"
              >
                Admin
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem component={Link} to="/logout" onClick={handleClose}>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        className="bg-gray-50  h-auto"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
