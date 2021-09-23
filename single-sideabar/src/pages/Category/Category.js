import React from "react";
// * Page Wrapper
import PageWrapper from "../../components/Wrappers/PageWrapper";

import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import DeleteIcon from "@mui/icons-material/Delete";

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
            <Stack>
              <Chip
                icon={<DeleteIcon />}
                label={category.name}
                size="large"
                sx={{ p: 3, mr: 2, mt: 2 }}
                variant="outlined"
              />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </PageWrapper>
  );
};

export default Category;
