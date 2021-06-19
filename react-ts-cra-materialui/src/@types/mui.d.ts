import "@material-ui/core/styles/createMuiTheme";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

interface CustomProps {
  spreadThis?: {
    [key: string]: CSSProperties;
  };
}

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme extends CustomProps {}
  interface ThemeOptions extends CustomProps {}
}
