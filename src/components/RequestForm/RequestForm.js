import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input, Button, InputLabel } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  input: {
    borderStyle: `solid`,
    borderWidth: `1px`
  },
  label: {
    color: `black`
  }
};

export function RequestForm({ classes, onRequestSubmit }) {
  const [zipcode, setZipcode] = useState("");

  const onInputChange = e => {
    setZipcode(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    onRequestSubmit(zipcode);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <InputLabel htmlFor="zipcode" className={classes.label}>
        Enter the zipcode you need weather report for:{" "}
      </InputLabel>
      <br />
      <Input
        id="zipcode"
        type="text"
        value={zipcode}
        onChange={onInputChange}
        classes={{ input: classes.input }}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

RequestForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSubmit: PropTypes.func.isRequired
};

RequestForm.defaultProps = {
  classes: {},
  onRequestSubmit: () => {}
};

export default withStyles(styles)(RequestForm);
