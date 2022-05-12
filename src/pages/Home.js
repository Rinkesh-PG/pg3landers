import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Paper, Tab, Tabs } from "@mui/material";
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

      <Container maxWidth="md">
        <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
          <Grid container spacing={1}>
            <Grid item xs={4} md={8}>
              <Box sx={{ width: "100%" }}>
                <img style={{ width: "100%" }} src={image1} alt="Listing" />
              </Box>
            </Grid>
            <Grid item xs={4} md={2}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${image3})`,
                }}
              ></Box>
            </Grid>
            <Grid item xs={4} md={2}>
              <Box>
                <img style={{ width: "100%" }} src={image2} alt="Map" />
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
          <HomeTabPanel value={value} index={0}>
            Item One
          </HomeTabPanel>
          <HomeTabPanel value={value} index={1}>
            Item Two
          </HomeTabPanel>
          <HomeTabPanel value={value} index={2}>
            Item Three
          </HomeTabPanel>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
