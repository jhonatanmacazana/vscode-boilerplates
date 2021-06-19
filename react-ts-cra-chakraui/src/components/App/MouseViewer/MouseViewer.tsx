import { Box } from "@chakra-ui/react";
import { useState } from "react";

import TransparentButton from "#root/components/shared/TransparentButton";
import useMousePosition from "#root/helpers/hooks/useMousePosition";

const MouseViewer = () => {
  const [isShowing, setIsShowing] = useState(true);
  const mouseCoords = useMousePosition();

  return (
    <Box color="white" fontSize="4rem" marginTop="3rem" textAlign="center">
      {isShowing ? (
        <>
          X: {mouseCoords.x}, Y: {mouseCoords.y},
        </>
      ) : null}
      <TransparentButton onClick={() => setIsShowing(!isShowing)}>
        ({isShowing ? "hide" : "show"})
      </TransparentButton>
    </Box>
  );
};

export default MouseViewer;
