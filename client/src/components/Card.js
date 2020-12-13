import React from 'react';
import { Paper } from '@material-ui/core';

const useStyles = ({
  paper: {
    padding: 10,
  },
});

const Card = () => {
    const styles = useStyles();
    return (
        <Paper className={styles.paper} elevation={0} />
    )
}

export default Card;
