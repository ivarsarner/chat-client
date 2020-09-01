import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { User } from '../../store/types';
import { UserList } from './UserList';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      overflowY: 'hidden',
      width: drawerWidth,
    },
    drawerContentRoot: {
      height: '80%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },
    drawerContentTitle: {
      height: '10%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    drawerContentUserList: {
      height: '80%',
      overflow: 'auto',
    },
    drawerContentUserDisconnect: {
      height: '10%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

interface Props {
  userName: string;
  connectedUsers: User[];
  onClick: () => void;
}

export const ChatTopBar: React.FC<Props> = ({
  userName,
  connectedUsers,
  onClick,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div className={classes.drawerContentRoot}>
        <div className={classes.drawerContentTitle}>
          <Typography variant="h6" noWrap>
            Users in chat: {connectedUsers.length}
          </Typography>
        </div>
        <div className={classes.drawerContentUserList}>
          <UserList connectedUsers={connectedUsers} />
        </div>
        <div className={classes.drawerContentUserDisconnect}>
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={onClick}
          >
            Disconnect
          </Button>
        </div>
        {/*    <IconButton
          color="inherit"
          aria-label="disconnect"
          edge="start"
          onClick={onClick}
        >
          <Typography variant="subtitle2" noWrap>
            Disconnect
          </Typography>
          <MeetingRoomIcon />
        </IconButton> */}
      </div>
    </div>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Welcome {userName}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="users in chat">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
};
