import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    textAlign: "center",
    marginTop: "90px",
    paddingBottom: "30px",
  },
  title: {
    paddingBottom: "30px",
  },
  dropdown: {
    paddingTop: "40px",
  },
  input: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "50px",
  },
  button: {
    marginTop: "30px",
    marginBottom: "30px",
  },
  alert: {
    width: "10%",
    display: "flex",
    justifyContent: "center",
  },
}));
