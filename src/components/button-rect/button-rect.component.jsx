import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function ButtonRectangle({variant, color, classname, value, onClickHandler}) {
  const classes = useStyles();

  return (
    <Button variant={variant} color={color} onClick={onClickHandler} className={`${classes.button} ${classname}`}>
      {value}
    </Button>
  );
}

export default ButtonRectangle;
