import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    height: 50,
    marginTop: 20,
    marginBottom: 20
  },
}));

const AppBar = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={3} />
  );
}

export default AppBar;
