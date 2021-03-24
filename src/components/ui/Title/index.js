import { Grid, Typography } from "@material-ui/core";

export const TitleComponent = ({ justify, alignItems, title, variant }) => {
  return (
    <Grid item container justify={justify} alignItems={alignItems}>
      <Typography variant={variant}>{title}</Typography>
    </Grid>
  );
};
