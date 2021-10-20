import React from "react";

import { Toolbar, Box, Grid } from "@mui/material";

const PageWrapper = (props) => {
  return (
    <Grid container>
      <Grid item xs={1} md={1}></Grid>
      <Grid item xs={11} md={11}>
        <Toolbar />
        <Box
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "17px 17px 40px -37px rgba(0,0,0,0.75)",
          }}
          component="main"
          sx={{ p: 4, m: 4 }}
        >
          <span
            style={{
              color: "#de6262",
              fontSize: "1.5rem",
              textShadow: "4px 4px 6px rgba(0,0,0,0.15)",
            }}
          >
            <b>{props.pageName}</b>
            {props.children}
          </span>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PageWrapper;
