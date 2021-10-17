import React from "react";

// * Page Wrapper
import PageWrapper from "../../components/Wrappers/PageWrapper";

// * Styled
import { makeStyles } from "@mui/styles";

// * MUI
import {
  Grid,
  Item,
  Box,
  TextField,
  InputAdornment,
  Container,
  Typography,
} from "@mui/material";

const useStyles = makeStyles({
  colorExample: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: "20px 30px",
  },
  box: {
    background: "linear-gradient(45deg, #ffc9d6 30%, #ffebe0 90%)", 
    border: 0,
    borderRadius: 0,
    padding: "2rem",
    margin: "1rem 0",
  },
  menuLable: {
    color: "#de6262",
    fontSize: "20px",
    fontWeight: "800",
    padding:"0.2rem"
  },
});

const SingleMenu = () => {
  const classes = useStyles();

  return (
    <PageWrapper pageName="SINGLE MENU">
      <Box className={classes.box} sx={{ flexGrow: 1, p: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography className={classes.menuLable}>Item Name :</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.menuLable}>Item Name :</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.menuLable}>Item Name :</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.menuLable}>Price :</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.menuLable}>Mrp :</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.menuLable}>Discount :</Typography>
          </Grid>
        </Grid>
      </Box>
    </PageWrapper>
  );
};

export default SingleMenu;
