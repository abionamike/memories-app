import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    paper: {
      width: 300,
      height: 400,
      margin: 'auto'
    },
  }));

const CreateAndUpdate = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper} elevation={3} />
    )
}

export default CreateAndUpdate;
