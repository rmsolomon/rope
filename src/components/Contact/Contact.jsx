import { Button, Container, TextField, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import React from "react";

import useStyles from "./styles";

const Contact = () => {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Name:", name, ",", "Message:", message);
    setShowAlert(true);
    setTimeout(function () {
      setShowAlert(false);
    }, 3000);
    setName("");
    setMessage("");
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Container className={classes.container}>
        <Typography className={classes.title} variant="h4">
          Contact Us
        </Typography>
        <TextField
          className={classes.form}
          required
          label="Your Name"
          value={name}
          onInput={(e) => setName(e.target.value)}
        ></TextField>
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

export default Contact;
