import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import type { CardProps } from "../../interfaces/CardProps";
import WaterOutlinedIcon from "@mui/icons-material/WaterOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";

export default function CurrentWeatherCard({ sx }: CardProps) {
  return (
    <Card sx={{ ...sx }}>
      <CardContent>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Current Weather
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
          6.25 PM
        </Typography>
        <Grid container spacing={2} alignItems={"center"} sx={{ marginBottom: 1 }}>
          <Grid>
            <CardMedia component="img" sx={{ width: 120 }} image="https://openweathermap.org/img/wn/10d@2x.png" alt="Live from space album cover" />
          </Grid>
          <Grid container-item spacing={2}>
            <Grid>
              <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                24
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Heavy Rain
              </Typography>
            </Grid>
          </Grid>
          <Grid alignSelf={"start"} marginTop={2.5}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              °C
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent={"space-between"}>
          <Grid container-item spacing={2} justifyItems={"center"}>
            <Grid>
              <WaterOutlinedIcon />
            </Grid>
            <Grid>
              <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                173
              </Typography>
            </Grid>
          </Grid>
          <Grid container-item spacing={2} justifyItems={"center"}>
            <Grid>
              <WaterDropOutlinedIcon />
            </Grid>
            <Grid>
              <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                92%
              </Typography>
            </Grid>
          </Grid>
          <Grid container-item spacing={2} justifyItems={"center"}>
            <Grid>
              <AirOutlinedIcon />
            </Grid>
            <Grid>
              <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                6km/h
              </Typography>
            </Grid>
          </Grid>
          <Grid container-item spacing={2} justifyItems={"center"}>
            <Grid>
              <WbSunnyOutlinedIcon />
            </Grid>
            <Grid>
              <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                3
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
