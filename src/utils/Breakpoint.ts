import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const theme = useTheme();
const xs = useMediaQuery(theme.breakpoints.only("xs"));
const sm = useMediaQuery(theme.breakpoints.only("sm"));
const md = useMediaQuery(theme.breakpoints.only("md"));
const lg = useMediaQuery(theme.breakpoints.only("lg"));
const xl = useMediaQuery(theme.breakpoints.only("xl"));
