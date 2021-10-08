import React from "react";

// * Page Wrapper
import PageWrapper from "../../components/Wrappers/PageWrapper";

// * MUI
import { Card, Box, TextField } from "@mui/material";

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
      <Box
        component="form"
        sx={{
          py: 2,
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {/* FORM */}
        <div>
          <CssTextField required id="outlined-required" label="Item Name" />
          <CssTextField required id="outlined-required" label="Item Name" />
        </div>
      </Box>
    </PageWrapper>
  );
};

export default AddMenu;
