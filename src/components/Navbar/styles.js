import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => (
  {
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
  links: {
    textDecoration: "none",
    fontWeight: "600",
    padding: "0px 10px 0px 10px",
  },
}));

export default useStyles;