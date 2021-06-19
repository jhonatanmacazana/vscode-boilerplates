import { makeStyles } from "@material-ui/core";
import { useState } from "react";

import TransparentButton from "#root/components/shared/TransparentButton";

const useStyles = makeStyles(theme => ({
  ...theme.spreadThis,
  wrapper: {
    display: "flex",
    flexFlow: "row nowrap",
    fontSize: "8rem",
    justifyContent: "center",
  },
  counterValue: {
    color: "white",
  },
}));

const Counter = () => {
  const styles = useStyles();
  const [count, setCount] = useState(1);

  return (
    <div className={styles.wrapper}>
      <TransparentButton onClick={() => setCount(count - 1)}>–</TransparentButton>
      <strong className={styles.counterValue}>{count}</strong>
      <TransparentButton onClick={() => setCount(count + 1)}>+</TransparentButton>
    </div>
  );
};

export default Counter;
