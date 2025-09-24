import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DropdownSearch from "./Dropdown/DropdownSearch";
import CurrentWeatherCard from "./Card/CurrentWeatherCard";
import MapsCard from "./Card/MapsCard";
import PopularCitiesCard from "./Card/PopularCitiesCard";
import ForecastCard from "./Card/ForecastCard";
import SummaryCard from "./Card/SummaryCard";

export default function MainContent() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 12 }} display={"flex"}>
          <DropdownSearch />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <CurrentWeatherCard sx={{ minWidth: 275, borderRadius: 3 }} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <MapsCard sx={{ minWidth: 275, borderRadius: 3 }} />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <PopularCitiesCard sx={{ minWidth: 275, borderRadius: 3 }} />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <ForecastCard sx={{ minWidth: 275, borderRadius: 3 }} />
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          <SummaryCard sx={{ minWidth: 275, borderRadius: 3 }} />
        </Grid>
      </Grid>
    </Box>
  );
}
