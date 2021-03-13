import React from "react";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {ExpandMore,ExitToApp, AccountCircle }from '@material-ui/icons';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavigationItemList } from "../../data/NavigationItemsList";
import { FormControl, MenuItem,Button, Divider ,Menu,Select,Avatar } from "@material-ui/core";
import { blue } from '@material-ui/core/colors';

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar1: {
      backgroundColor: "white",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: "rgb(255, 255, 255)",
      borderBottom: "1px solid rgb(223, 228, 229)",
      fontSize: "15px",
      fontWeight: "300",
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
      backgroundColor: "rgb(62, 148, 228)!important",
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    navbar: {
      fontSize: "15px",
      fontWeight: "300",
      textAlign: "left",
      transition: "all 0.3s ease 0s",
      zIndex: "1",
      background: "white",
      borderBottom: "1px solid rgb(223, 228, 229)",
      flex: "1 0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      height: "60px",
      padding: "0px 15px",
      marginBottom: '35px',
      paddingBottom: '10px',
    },
    fieldSection: {
      display: 'flex'
    },
    profileIcon:{
      marginLeft: 0,
    },
    navdrop: {
      border: '1px solid rgb(204, 204, 204)',
      borderRadius: '4px',
      boxShadow: 'rgb(62 148 228 / 15%) 0px 2px 4px 0px',
      color: 'rgb(2, 13, 22)',
      cursor: 'pointer'
    },
    colorSection: {
      display:'flex',
      alignItems: 'center'
    },
    colorField: {
      borderRadius: '50%',
      marginRight: '5px',
      width: '30px',
      height: '30px',
      border: '1px solid transparent'
    }
  })
);

export default function Layout({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openLogout = Boolean(anchorEl);


  const [headerFont,setHeaderFont]=React.useState(0);
  const [bodyFont,setBodyFont]=React.useState(0);
  const [fontSize,setFontSize]=React.useState(0);
      const SelectFont=(e)=>{
        setHeaderFont(e.target.value);}

      const SelectBody=(e)=>{
        setBodyFont(e.target.value);}

      const SelectSize=(e)=>{
        setFontSize(e.targetvalue);}


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="Fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap style={{color: blue[500],flexGrow: 1}}>
              CMD Resumes
            </Typography>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {/* <Avatar alt="profile picture" src="https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg" /> */}
                <AccountCircle style={{color: blue[500], fontSize: '35px'}}/>
                <ExpandMore style={{ color: blue[500] }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openLogout}
                onClose={handleClose}
              >
              <ListItem button>
              <ListItemIcon>
                <ExitToApp  onClick={handleClose} style={{ color: blue[500] }}/>
              </ListItemIcon>
              <ListItemText  onClick={handleClose} primary="Logout" />
              </ListItem>
              </Menu>

          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon style={{ color: blue[500] }} />
              ) : (
                <ChevronLeftIcon style={{ color: blue[500] }}  />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {NavigationItemList.map((item, index) => (
              <ListItem button key={item.id}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.navbar}>
            <div className={classes.fieldSection}>
              <p>Header Font</p> &nbsp; &nbsp;
              <FormControl className={classes.margin}>
               <Button variant="outlined" className={classes.navdrop} >
               <Select
                            disableUnderline={true}
                            value={1}
                            onChange={SelectFont}
                            >
                            <MenuItem value={headerFont}>Select Header Font</MenuItem>
                            <MenuItem value={1}>GaramondFira</MenuItem>
                            <MenuItem value={2}>Arvo</MenuItem>
                            <MenuItem value={3}>AssistantEB</MenuItem>
                            <MenuItem value={4}>SerifOpen</MenuItem>
                            <MenuItem value={5}>SansOswaldPlayfair</MenuItem>
                            <MenuItem value={6}>SansPT</MenuItem>
                            <MenuItem value={7}>SerifRalewayRasaRoboto</MenuItem>
                            <MenuItem value={8}>CondensedRoboto</MenuItem>
                            <MenuItem value={9}>MontserratNoto</MenuItem>
                            <MenuItem value={10}>Serif</MenuItem>
                            </Select>
                </Button> 
              </FormControl>
            </div>
            <div className={classes.fieldSection}>
              <p>Body Font</p> &nbsp; &nbsp;
              <FormControl className={classes.margin}>
              <Button variant="outlined" className={classes.navdrop}>
              <Select
                            disableUnderline={true}
                            value={1}
                            onChange={SelectBody}
                            >
                            <MenuItem value={bodyFont}>Select Body Font</MenuItem>
                            <MenuItem value={1}>GaramondFira</MenuItem>
                            <MenuItem value={2}>Arvo</MenuItem>
                            <MenuItem value={3}>AssistantEB</MenuItem>
                            <MenuItem value={4}>SerifOpen</MenuItem>
                            <MenuItem value={5}>SansOswaldPlayfair</MenuItem>
                            <MenuItem value={6}>SansPT</MenuItem>
                            <MenuItem value={7}>SerifRalewayRasaRoboto</MenuItem>
                            <MenuItem value={8}>CondensedRoboto</MenuItem>
                            <MenuItem value={9}>MontserratNoto</MenuItem>
                            <MenuItem value={10}>Serif</MenuItem>
                            </Select>
                </Button>
              </FormControl>
            </div>
            <div className={classes.fieldSection} >
              <p>Font Size</p> &nbsp; &nbsp;
              <FormControl className={classes.margin}>
              <Button variant="outlined" className={classes.navdrop}>
              <Select
                            disableUnderline={true}
                            value={7}
                            onChange={SelectSize}
                            >
                            <MenuItem value={fontSize}>Select Font Size</MenuItem>
                            <MenuItem value={1}>2</MenuItem>
                            <MenuItem value={2}>4</MenuItem>
                            <MenuItem value={3}>5</MenuItem>
                            <MenuItem value={4}>6</MenuItem>
                            <MenuItem value={5}>8</MenuItem>
                            <MenuItem value={6}>12</MenuItem>
                            <MenuItem value={7}>14</MenuItem>
                            <MenuItem value={8}>16</MenuItem>
                            </Select>
                </Button>
              </FormControl>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className={classes.fieldSection} >
              <p>Colors</p> &nbsp; &nbsp;
              <div className={classes.colorSection}>
                <div className={classes.colorField} style={{backgroundColor: 'rgb(248, 210, 50)'}}></div>
                <div className={classes.colorField} style={{backgroundColor: 'black'}}></div>
                <div className={classes.colorField} style={{backgroundColor: 'black'}}></div>
                <div className={classes.colorField} style={{backgroundColor: 'white'}}></div>
              </div>
            </div>
            <Divider orientation="vertical" flexItem />
            <Button variant="outlined" color="primary">
              Reset Style
            </Button>
          </div>
          <div>{children}</div>
        </main>
      </div>
    </>
  );
}
