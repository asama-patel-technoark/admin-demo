import React from "react";
import { Grid, Paper, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const Login = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        // alignItems="center"
        style={{ height: "100%", paddingTop: "10em" }}
      >
        <Grid item xs={10} md={6} lg={4}>
          <Paper elevation={3} style={{ height: "30em" }}>
            <div
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "2em",
                margin: "1em 0em",
              }}
            >
              Login
            </div>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              // alignItems="center"
            >
              <Grid item>
                <Button variant="outlined" startIcon={<GoogleIcon />} fullWidth>
                  Sign In with Google
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  startIcon={<FacebookIcon />}
                  fullWidth
                >
                  Sign In with Facebook
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
