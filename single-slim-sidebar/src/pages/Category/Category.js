import React from "react";
// * Page Wrapper
import PageWrapper from "../../components/Wrappers/PageWrapper";

// *
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// *
import CrossSvg from "../../routes/icons/cross.svg";

let cat = [
  {
    name: "CATEGORY 1",
  },
  {
    name: "CATEGORY 1",
  },
  {
    name: "CATEGORY 1",
  },
  {
    name: "CATEGORY 1",
  },
  {
    name: "CATEGORY 1",
  },
  {
    name: "CATEGORY 1",
  },
  {
    name: "CATEGORY 1",
  },
  {
    name: "CATEGORY 1",
  },
  {
    name: "CATEGORY 1",
  },
  {
    name: "CATEGORY 1",
  },
  {
    name: "CATEGORY 1",
  },
  {
    name: "CATEGORY 1",
  },
  {
    name: "CATEGORY 1",
  },
  {
    name: "CATEGORY 1",
  },
  {
    name: "CATEGORY 1",
  },
  {
    name: "CATEGORY 1",
  },
];

const Category = () => {
  return (
    <PageWrapper pageName="MY CATEGORIES">
      <Grid container spacing={1}>
        {cat.map((category) => (
          <Grid item xs={8} md={3}>
            <Stack
              style={{
                position: "relative",
              }}
            >
              <IconButton
                style={{
                  // marginBottom: "-15%",
                  // marginLeft: "80%",
                  top: "-15%",
                  left: "80%",
                  position: "absolute"
                }}
              >
                <img
                  style={{
                    filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.2))",
                  }}
                  src={CrossSvg}
                  loading="lazy"
                  width="30"
                />
              </IconButton>
              <Chip
                style={{
                  boxShadow: "5px 5px 29px -13px rgba(0,0,0, 0.5)",
                  borderColor: "#de6262",
                }}
                label={category.name}
                size="large"
                sx={{ p: 3, mr: 2, mt: 2 }}
                variant="outlined"
                // icon={
                //   <IconButton
                //     style={{
                //       marginBottom: "20%",
                //       marginLeft: "20%",
                //       display: "relative",
                //     }}
                //   >
                //     <img
                //       style={{
                //         // boxShadow: "5px 5px 29px -13px rgba(0,0,0,1)",
                //         filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.2))",
                //       }}
                //       src={CrossSvg}
                //       loading="lazy"
                //       width="30"
                //     />
                //   </IconButton>
                // }
              />
            </Stack>

            {/*  */}

            {/* <Card sx={{ maxWidth: 345, p: 0, m: 0 }}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Category"
              />
            </Card> */}

            {/*  */}
          </Grid>
        ))}
      </Grid>
    </PageWrapper>
  );
};

export default Category;
