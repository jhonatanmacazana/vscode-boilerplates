import { Box, Grid } from "@chakra-ui/react";

import ColorModeSwitcher from "./ColorModeSwitcher";
import Counter from "./Counter";
import MouseViewer from "./MouseViewer";

const App = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Counter />
        <MouseViewer />
      </Grid>
    </Box>
  );
};

export default App;
