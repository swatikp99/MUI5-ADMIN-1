import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

// * Page Wrapper
import PageWrapper from "../../components/Wrappers/PageWrapper";

const Dashboard = () => {
  return (
    <PageWrapper pageName="Dashboard">
      <Card
        sx={{
          maxWidth: 345,
          boxShadow: 0,
          border: 2,
          my: 2,
          borderColor: "blue",
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </PageWrapper>
  );
};

export default Dashboard;
