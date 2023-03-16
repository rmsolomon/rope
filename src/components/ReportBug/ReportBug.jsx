import Alert from "@mui/lab/Alert";
import {
  Button, Container, MenuItem,
  TextField, Typography
} from "@mui/material";
import React from "react";

import useStyles from "./styles";

const locations = [
  {
    value: "Home Page",
    label: "Home Page",
  },
  {
    value: "Product Page",
    label: "Product Page",
  },
  {
    value: "Cart Page",
    label: "Cart Page",
  },
  {
    value: "Checkout Page",
    label: "Checkout Page",
  },
  {
    value: "Other...",
    label: "Other...",
  },
];

const ReportBug = () => {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      "Name:",
      name,
      ",",
      "Location:",
      location,
      ",",
      "Message:",
      message
    );
    setShowAlert(true);
    setTimeout(function () {
      setShowAlert(false);
    }, 3000);
    setName("");
    setLocation("");
    setMessage("");
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Container className={classes.container}>
        <Typography className={classes.title} variant="h4">
          Report Bug
        </Typography>
        <TextField
          className={classes.form}
          required
          label="Your Name"
          value={name}
          onInput={(e) => setName(e.target.value)}
        ></TextField>
        <div className={classes.dropdown}>
          <TextField
            id="standard-select"
            select
            required
            label="Location"
            value={location}
            onChange={handleChange}
            helperText="Please select the page your bug is located on"
          >
            {locations.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <TextField
          className={classes.input}
          id="standard-multiline-flexible"
          label="Your message"
          variant="outlined"
          multiline
          rowsmax={8}
          required
          value={message}
          type="text"
          onInput={(e) => setMessage(e.target.value)}
        />
        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
        {showAlert ? (
          <Alert className={classes.alert} severity="success">
            Success!
          </Alert>
        ) : null}
      </Container>
    </form>
  );
};

export default ReportBug;
