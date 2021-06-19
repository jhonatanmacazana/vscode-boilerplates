import { extendTheme } from "@chakra-ui/react";

import styles from "./foundations/styles";

const overrides = { styles };

const theme = extendTheme(overrides);

export default theme;
