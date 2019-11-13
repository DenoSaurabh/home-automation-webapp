import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Buttons({ value, btnClass, onClickHandler }) {
  const classes = useStyles();

  return (
    <Fab
      color="primary"
      aria-label="add"
      onClick={onClickHandler}
      className={`${classes.fab} btn-control -${btnClass}`}
    >
      {value}
    </Fab>
  );
}
