import { Card, CardContent, Typography } from "@mui/material";
import type { CardProps } from "../../interfaces/CardProps";

export default function PopularCitiesCard({ sx }: CardProps) {
  return (
    <Card sx={{ ...sx }}>
      <CardContent>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Popular Cities
        </Typography>
      </CardContent>
    </Card>
  );
}
