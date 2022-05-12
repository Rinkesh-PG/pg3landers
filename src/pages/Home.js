import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Button,
  Tab,
  Tabs,
  Typography,
  Card,
  Chip,
} from "@mui/material";
import axios from "axios";
import { styled } from "@mui/material/styles";

import HomeTabPanel from "../modules/home/components/HomeTabPanel";
import image1 from "../image-1.png";
import image2 from "../image-2.png";
import image3 from "../image-3.png";
import image4 from "../assets/image-4.png";
import * as url from "url";
import PaymentDialog from "../modules/common/components/PaymentDialog";
import Wallet from "../modules/home/components/Wallet";

const StyledTabs = styled(props => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#fff",
  },
});

const StyledTab = styled(props => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#fff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

const a11yProps = index => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const Home = () => {
  const [initialData, setInitialData] = useState([]);
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

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

  const toggleDialog = val => {
    setOpen(val);
  };

  return (
    <Box
      sx={{
        background: "#1a1a1a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ py: 2 }}>
          <Typography variant="h4">10 Gopeng Street</Typography>
          <Chip
            sx={{
              color: "black",
              background: "white",
              border: "1px solid #808080",
              borderRadius: "3px",
            }}
            label="Condo"
            variant="outlined"
            size="medium"
          />
        </Box>

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
            <StyledTabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor={"inherit"}
            >
              <StyledTab label="Details" {...a11yProps(0)} />
              <StyledTab label="Bids" {...a11yProps(1)} />
              <StyledTab label="History" {...a11yProps(2)} />
            </StyledTabs>
          </Box>
          <Grid container columnSpacing={2}>
            <Grid item md={7}>
              <>
                <HomeTabPanel value={value} index={0}>
                  <Box
                    sx={{
                      background: "#111111",
                      padding: "1rem",
                      borderRadius: "8px",
                    }}
                  >
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
            <Grid item md={4}>
              <Card
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
                  <Button onClick={() => toggleDialog(true)}>
                    Place your bid
                  </Button>
                  <PaymentDialog
                    open={open}
                    onClose={() => toggleDialog(false)}
                  />
                </Box>
              </Card>
              <div style={{ marginTop: "0.5rem" }}>
                <Wallet />
              </div>
              <Box sx={{ marginTop: "0.5rem", width: "100%" }}>
                <img src={image4} style={{ display: "block", width: "100%" }} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
