import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Cloud } from "@mui/icons-material";

function MainAppBar() {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  const appName = "Weather Web";

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: xs ? "center" : "" }}>
          <Cloud sx={{ display: "flex", mr: 2 }} />
          <Typography
            variant={xs ? "h5" : "h6"}
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: "flex",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            {appName}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainAppBar;
