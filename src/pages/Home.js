import React, { useEffect, useState } from "react";
import { Box, Container, Tab, Tabs } from "@mui/material";
import axios from "axios";

import HomeTabPanel from "../modules/home/components/HomeTabPanel";

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

  console.log(initialData);

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
      <Box></Box>
      <Container maxWidth="md">
        <Box sx={{ width: "100%" }}>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="white"
              aria-label="basic tabs example"
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
