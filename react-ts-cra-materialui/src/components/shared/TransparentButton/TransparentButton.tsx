import { Button, withStyles } from "@material-ui/core";

const TransparentButton = withStyles(() => ({
  root: {
    backgroundColor: "transparent",
    border: 0,
    color: "white",
    fontFamily: "inherit",
    fontSize: "inherit",
    margin: "0 2rem",
    userSelect: "none",

    "&:hover": {
      cursor: "pointer",
    },

    "&:focus:not(:focus-visible)": {
      outline: "none",
    },
  },
}))(Button);

export default TransparentButton;
