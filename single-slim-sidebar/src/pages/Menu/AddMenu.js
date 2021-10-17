import React from "react";

// * Page Wrapper
import PageWrapper from "../../components/Wrappers/PageWrapper";

// * MUI
import { Grid, Box, TextField, InputAdornment } from "@mui/material";

import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& label": {
    color: "#de6262",
  },
  "& label.Mui-focused": {
    color: "#de6262",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#de6262",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "solid 2px #de6262",
      borderRadius: "0px",
    },
    "&:hover fieldset": {
      border: "solid 2px #f06c6c",
      borderRadius: "0px",
    },
    "&.Mui-focused fieldset": {
      border: "solid 2px #f06c6c",
      borderRadius: "0px",
    },
  },
});

const AddMenu = () => {
  return (
    <PageWrapper pageName="ADD MENU">
      <Box sx={{ flexGrow: 1, py: 4 }}>
        {/* FORM */}
        <Grid container spacing={2}>
          <Grid item xs={8} md={4}>
            <CssTextField
              fullWidth
              required
              id="outlined-required"
              label="Item Name"
            />
          </Grid>
          <Grid item xs={8} md={4}>
            <CssTextField
              fullWidth
              required
              id="outlined-required"
              label="Item Name"
            />
          </Grid>
          <Grid item xs={8} md={4}>
            <CssTextField
              fullWidth
              required
              id="outlined-required"
              label="Item Name"
            />
          </Grid>
          <Grid item xs={8} md={4}>
            <CssTextField
              fullWidth
              required
              id="outlined-required"
              label="Price"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <span style={{ color: "#de6262" }}>₹</span>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={8} md={4}>
            <CssTextField
              fullWidth
              required
              id="outlined-required"
              label="MRP"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <span style={{ color: "#de6262" }}>₹</span>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={8} md={4}>
            <CssTextField
              fullWidth
              required
              id="outlined-required"
              label="Price"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <span style={{ color: "#de6262" }}>₹</span>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </PageWrapper>
  );
};

export default AddMenu;
