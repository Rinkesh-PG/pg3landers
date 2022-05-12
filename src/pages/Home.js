import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
  Chip,
} from "@mui/material";
import axios from "axios";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  connect2Contract,
  setHighestBidPrice
} from "../actions/web3Actions";

import Ether from "../assets/svg/Ether.svg";
import HomeTabPanel from "../modules/home/components/HomeTabPanel";
import image1 from "../image-1.png";
import image2 from "../image-2.png";
import image3 from "../image-3.png";
import image4 from "../assets/image-4.png";
import Wallet from "../modules/home/components/Wallet";
import BiddingComponent from "../modules/common/components/BiddingComponent";
import { connect, useDispatch } from "react-redux";
import { formatCurrency } from "../util/common";

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

const Home = ({ balance, web3Client, contract, highestBidPrice, accountAddress }) => {
  // const [highestBidPrice, setHighestBidPrice] = useState(370.55);
  const [initialData, setInitialData] = useState([]);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const fun = async () => {
      if (web3Client && contract) {
        const highestBid = await contract.methods.highestBid().call();
        dispatch(setHighestBidPrice(highestBid));
      }
    };
    fun();
  }, [web3Client, contract]);

  const getData = async () => {
    const { data } = await axios.get("http://3.110.107.252/api/property-list");
    setInitialData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (_event, val) => {
    setValue(val);
  };

  useEffect(() => {
    if (!contract) {
      if (web3Client && accountAddress) {
        dispatch(connect2Contract());
      }
    }
  }, [web3Client, accountAddress]);

  return (
    <Box
      sx={{
        background: "#1a1a1a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            py: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ArrowBackIcon />
              <div style={{ marginLeft: "30px" }}>
                <Typography variant="h4">10 Gopeng Street</Typography>
                <div style={{ display: "flex", alignItems: "center" }}>
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
                  <Typography sx={{ paddingLeft: 2 }} variant="subtitle2">
                    Chinatown/Tanjong Pager (D2)
                  </Typography>
                </div>
              </div>
            </Box>
          </div>
          <div>
            {balance ? (
              <div
                style={{
                  display: "inline-block",
                  marginRight: "1rem",
                }}
              >
                <span style={{ verticalAlign: "super", marginRight: "0.5rem" }}>
                  Balance:
                </span>
                <img
                  src={Ether}
                  style={{ height: "24px", filter: "invert(1)" }}
                />{" "}
                <span style={{ verticalAlign: "super" }}>
                  {formatCurrency(balance * 1000)}
                </span>
              </div>
            ) : (
              ""
            )}
            <FavoriteIcon />
            <MoreHorizIcon sx={{ marginLeft: 3 }} />
          </div>
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
            <Grid item md={8}>
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
            <Grid item md={3}>
              <BiddingComponent highestBidPrice={highestBidPrice} />
              <div style={{ marginTop: "0.5rem" }}>
                {!balance && <Wallet />}
              </div>
              <Box sx={{ marginTop: "0.5rem", width: "350px" }}>
                <img src={image4} style={{ display: "block", width: "100%" }} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const mapStateToProps = (state, _ownProps) => ({
  metamaskError: state.web3Reducer.error,
  balance: state.web3Reducer.balance,
  accountAddress: state.web3Reducer.accountAddress,
  web3Client: state.web3Reducer.web3Client,
  contract: state.web3Reducer.contractMeta.contract,
  highestBidPrice: state.web3Reducer.highestBidPrice
});

export default connect(mapStateToProps)(Home);
