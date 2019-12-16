import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import red from "@material-ui/core/colors/red";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  message: {
    color: red[500],
    fontWeight: 600,
    textAlign: "center"
  }
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { classes, message } = this.props;

    if (this.state.error) {
      return <Typography className={classes.message}>{message}</Typography>;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object,
  message: PropTypes.string
};

ErrorBoundary.defaultProps = {
  message: "Something went wrong!"
};

export default withStyles(styles)(ErrorBoundary);
