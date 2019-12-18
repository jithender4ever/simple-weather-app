import React from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = {
  root: {
    maxWidth: "50%"
  },
  errorMsg: {
    color: "red"
  }
};

export function ErrorView({ classes, message }) {
  return (
    <Card raised className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" className={classes.errorMsg}>
          {message} for the zipcode entered. Please check and re-enter the
          correct zipcode.
        </Typography>
      </CardContent>
    </Card>
  );
}

ErrorView.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired
};

ErrorView.defaultProps = {
  classes: {},
  message: "Something went wrong..."
};

export default withStyles(styles)(ErrorView);
