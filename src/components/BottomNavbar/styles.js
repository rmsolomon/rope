import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    color: "#000000",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    bottom: "0",
    backgroundColor: "#F5F5F5",
  },
  reportbug: {
    color: "#000000",
    borderColor: "#000000",
    left: "30px",
  },
  stripe: {
    paddingRight: "30px",
  },
}));
