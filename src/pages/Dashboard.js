import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";
import SmallCard1 from "../components/SmallCard1";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  paddingLeft: theme.spacing(4),
  //   textAlign: "center",
  color: theme.palette.text.primary,
}));

const Dashboard = () => {
  return (
    <>
    {console.log('JJJJJ')}
      <Grid container spacing={2}>
        {[1, 2, 3, 4].map((item) => (
          <Grid item xs={6} md={3}>
            <SmallCard1 />
          </Grid>
        ))}
        <Grid item xs={6} md={6}>
          <Item>
            <h1>Schedule</h1>
            {["January", "February", "March", "April", "May", "June"].map(
              (item) => (
                <ul>
                  <li>{item}</li>
                </ul>
              )
            )}
          </Item>
        </Grid>
        <Grid item xs={6} md={6}>
          <Item>
            <h1>Tasks</h1>
            {["January", "February", "March", "April", "May", "June"].map(
              (item) => (
                <ul>
                  <li>{item}</li>
                </ul>
              )
            )}
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
