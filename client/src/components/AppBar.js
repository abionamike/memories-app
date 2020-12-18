import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa'
  },
  heading: {
    color: 'rgba(0, 183, 255, 1)',
  },
  image: {
    marginLeft: '15px'
  }
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h3" align="center">Memories</Typography>
      {/* <img src={} alt="memories" height="60" /> */}
    </AppBar>
  );
}

export default NavBar;
