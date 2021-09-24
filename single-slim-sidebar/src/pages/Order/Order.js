import React from "react";

import { Toolbar, Box, Grid } from "@mui/material";

const Order = () => {
  return (
    <Grid container>
      <Grid item xs={1} md={1}></Grid>
      <Grid item xs={8} md={11}>
        <Toolbar />
        <Box
          style={{ backgroundColor: "#ffffff" }}
          component="main"
          sx={{ boxShadow: 1, px: 4, py: 1, my: 4, mx: 4 }}
        >
          <h1>Order</h1>
        </Box>
      </Grid>
      <Grid item xs={0} md={0}></Grid>
    </Grid>
  );
};

export default Order;
