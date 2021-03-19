import { Grid, Typography } from "@material-ui/core";

export const TitleComponent = ({ justify, alignItems, title }) => {
  return (
    <Grid item container justify={justify} alignItems={alignItems}>
      <Typography>{title}</Typography>
    </Grid>
  );
};
