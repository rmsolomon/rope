import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "#F5F5F5",
    padding: theme.spacing(4),
  },
  root: {
    flexGrow: 1,
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
