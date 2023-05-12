import { Grid } from "@mui/material";
import { FC } from "react";
import { PacmanLoader } from "react-spinners";

export const PacManLoader: FC = () => {
  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100vw"
    >
      <PacmanLoader color="blue" size={200} />
    </Grid>
  );
};
