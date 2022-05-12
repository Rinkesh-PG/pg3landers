import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import axios from "axios";

import HomeTabPanel from "../modules/home/components/HomeTabPanel";
import image1 from "../image-1.png";
import image2 from "../image-2.png";
import image3 from "../image-3.png";
import * as url from "url";

const a11yProps = index => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const Home = () => {
  const [initialData, setInitialData] = useState([]);
  const [value, setValue] = useState(0);

  const getData = async () => {
    const { data } = await axios.get("http://3.110.107.252/api/property-list");
    setInitialData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (event, val) => {
    setValue(val);
  };

  return (
    <Box
      sx={{
        background: "black",
        color: "white",
      }}
    >
      <a href="/wallet">Connect Wallet</a>

      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, overflow: "hidden", width: "100%" }}>
          <Grid container spacing={1}>
            <Grid item xs={4} md={6}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${image1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Grid>
            <Grid item xs={4} md={3}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${image3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></Box>
            </Grid>
            <Grid item xs={4} md={3}>
              <Box>
                <img
                  style={{ width: "100%", display: "block" }}
                  src={image2}
                  alt="Map"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor={"inherit"}
            >
              <Tab label="Details" {...a11yProps(0)} />
              <Tab label="Bids" {...a11yProps(1)} />
              <Tab label="History" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <Grid container columnSpacing={2}>
            <Grid item md={8}>
              <>
                <HomeTabPanel value={value} index={0}>
                  <Box>
                    <Grid
                      sx={{ marginTop: 1, alignItems: "center" }}
                      container
                      spacing={1}
                    >
                      <Grid item md={3}>
                        <Typography
                          sx={{ fontWeight: "bold", fontSize: "0.9rem" }}
                          variant={"body1"}
                        >
                          Price/sqft
                        </Typography>
                      </Grid>
                      <Grid item md={3}>
                        <Typography variant={"body2"}>$1,842.11 psf</Typography>
                      </Grid>
                      <Grid item md={3}>
                        <Typography
                          sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                          variant={"body1"}
                        >
                          Built year
                        </Typography>
                      </Grid>
                      <Grid item md={3}>
                        <Typography variant={"body2"}>2007</Typography>
                      </Grid>
                    </Grid>

                    <Grid
                      sx={{ marginTop: 1, alignItems: "center" }}
                      container
                      spacing={1}
                    >
                      <Grid item md={3}>
                        <Typography
                          sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                          variant={"body1"}
                        >
                          Floor level
                        </Typography>
                      </Grid>
                      <Grid item md={3}>
                        <Typography variant={"body2"}>High</Typography>
                      </Grid>
                      <Grid item md={3}>
                        <Typography
                          sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                          variant={"body1"}
                        >
                          Tenure
                        </Typography>
                      </Grid>
                      <Grid item md={3}>
                        <Typography variant={"body2"}>
                          99-year leasehold
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid
                      sx={{ marginTop: 1, alignItems: "center" }}
                      container
                      spacing={1}
                    >
                      <Grid item md={3}>
                        <Typography
                          sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                          variant={"body1"}
                        >
                          Furnishing
                        </Typography>
                      </Grid>
                      <Grid item md={3}>
                        <Typography variant={"body2"}>Fully</Typography>
                      </Grid>
                      <Grid item md={3}>
                        <Typography
                          sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                          variant={"body1"}
                        >
                          Property type
                        </Typography>
                      </Grid>
                      <Grid item md={3}>
                        <Typography variant={"body2"}>Condo</Typography>
                      </Grid>
                    </Grid>

                    <Grid
                      sx={{ marginTop: 1, alignItems: "center" }}
                      container
                      spacing={1}
                    >
                      <Grid item md={3}>
                        <Typography
                          sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                          variant={"body1"}
                        >
                          Overlooking view
                        </Typography>
                      </Grid>
                      <Grid item md={3}>
                        <Typography variant={"body2"}>City view</Typography>
                      </Grid>
                      <Grid item md={3}>
                        <Typography
                          sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                          variant={"body1"}
                        >
                          Last updated
                        </Typography>
                      </Grid>
                      <Grid item md={3}>
                        <Typography variant={"body2"}>16 mins ago</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </HomeTabPanel>
                <HomeTabPanel value={value} index={1}>
                  Item Two
                </HomeTabPanel>
                <HomeTabPanel value={value} index={2}>
                  Item Three
                </HomeTabPanel>
              </>
            </Grid>
            <Grid item md={3}>
              <Box
                sx={{
                  marginTop: "-60px",
                  background: "white",
                  color: "black",
                  py: "20px",
                  px: "10px",
                }}
              >
                <Box>
                  <Typography>Highest Bid</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
