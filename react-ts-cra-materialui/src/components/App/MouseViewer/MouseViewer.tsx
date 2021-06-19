import { makeStyles } from "@material-ui/core";
import { useState } from "react";

import TransparentButton from "#root/components/shared/TransparentButton";
import useMousePosition from "#root/helpers/hooks/useMousePosition";

const useStyles = makeStyles(theme => ({
  ...theme.spreadThis,
  coordinates: {
    color: "white",
    fontSize: "4rem",
    marginTop: "3rem",
    textAlign: "center",
  },
}));

const MouseViewer = () => {
  const [isShowing, setIsShowing] = useState(true);
  const mouseCoords = useMousePosition();
  const styles = useStyles();

  return (
    <div className={styles.coordinates}>
      {isShowing ? (
        <>
          X: {mouseCoords.x}, Y: {mouseCoords.y},
        </>
      ) : null}
      <TransparentButton onClick={() => setIsShowing(!isShowing)}>
        ({isShowing ? "hide" : "show"})
      </TransparentButton>
    </div>
  );
};

export default MouseViewer;
