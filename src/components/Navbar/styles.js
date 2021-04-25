import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#393e46",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - 0px)`,
      marginLeft: 0,
    },
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
  grow: {
    flexGrow: 1,
  },
}));
