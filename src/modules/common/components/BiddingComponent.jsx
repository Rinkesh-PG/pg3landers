import React, { useEffect, useState } from "react";
import { Button, Typography, Card } from "@mui/material";
import Ether from "../../../assets/svg/Ether.svg";
import { formatCurrency } from "../../../util/common";
import PaymentDialog from "./PaymentDialog";
import { connect, useDispatch } from "react-redux";
import { closeAuction as closeAuctionAction } from "../../../actions/web3Actions";
import { LoadingButton } from "@mui/lab";

const BiddingComponent = ({
  highestBidPrice,
  accountAddress,
  loading,
  usdConversion
}) => {
    console.log('==>> account : ', accountAddress)
  const [open, setOpen] = useState(false);
  const toggleDialog = val => {
    setOpen(val);
  };

  const dispatch = useDispatch();

  const closeAuction = () => {
    dispatch(closeAuctionAction());
  }

  return (
    <Card
      sx={{
        width: "350px",
        marginTop: "-80px",
        background: "white",
        color: "black",
      }}
    >
      <div style={{ background: "#f5f5f5", padding: "15px 15px 0" }}>
        <div
          style={{
            background: "#808080",
            fontSize: "14px",
            color: "white",
            width: "fit-content",
            padding: "0 5px",
            margin: "auto",
          }}
        >
          RESERVED AUCTION
        </div>
        <div style={{ display: "flex", marginTop: "0.5rem" }}>
          <div style={{ width: "50%", textAlign: "center" }}>
            <Typography sx={{ fontSize: "12px", fontWeight: "300" }}>
              Highest Bid
            </Typography>
            <div>
              <img
                src={Ether}
                style={{ height: "24px", filter: "opacity(0.5)" }}
              />
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  paddingLeft: "0.5rem",
                  verticalAlign: "bottom",
                }}
              >
                {highestBidPrice}
              </span>
            </div>
            <Typography sx={{ fontSize: "12px", fontWeight: "300" }}>
              ${formatCurrency(highestBidPrice * usdConversion)}
            </Typography>
          </div>
          <div style={{ width: "50%", textAlign: "center" }}>
            <Typography sx={{ fontSize: "12px", fontWeight: "300" }}>
              Proxy Price
            </Typography>
            <div>
              <img
                src={Ether}
                style={{ height: "24px", filter: "opacity(0.5)" }}
              />
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  paddingLeft: "0.5rem",
                  verticalAlign: "bottom",
                }}
              >
                450
              </span>
            </div>
            <Typography sx={{ fontSize: "12px", fontWeight: "300" }}>
              ${formatCurrency(450 * usdConversion)}
            </Typography>
          </div>
        </div>
        <div
          style={{
            fontSize: "14px",
            color: "black",
            textAlign: "center",
          }}
        >
          <span style={{ verticalAlign: "super" }}>Reserved Price:</span>{" "}
          <img src={Ether} style={{ height: "24px", filter: "opacity(0.5)" }} />{" "}
          <span style={{ verticalAlign: "super" }}>200</span>
        </div>
      </div>
      <div style={{ textAlign: "center", margin: "0.5rem 0" }}>
        {accountAddress === "0x50c58217089cb5efa3c90919075a1a8d62b8035c" ? (
            <LoadingButton
            style={{
              background: "#f24727",
              color: "white",
              padding: "10px",
              fontWeight: "bold",
            }}
            loading={loading}
            loadingPosition="start"
            onClick={closeAuction}
            variant="outlined"
          >
            Close Auction
          </LoadingButton>
        ) : (
          <Button
            style={{
              background: "#f24727",
              color: "white",
              padding: "10px",
              fontWeight: "bold",
            }}
            onClick={() => toggleDialog(true)}
          >
            Place your bid
          </Button>
        )}
      </div>
      <PaymentDialog open={open} onClose={() => toggleDialog(false)} />
    </Card>
  );
};

const mapStateToProps = (state, _ownProps) => ({
  metamaskError: state.web3Reducer.error,
  balance: state.web3Reducer.balance,
  accountAddress: state.web3Reducer.accountAddress,
  web3Client: state.web3Reducer.web3Client,
  contract: state.web3Reducer.contractMeta.contract,
  highestBidPrice: state.web3Reducer.highestBidPrice,
  usdConversion: state.web3Reducer.usdConversion
});

export default connect(mapStateToProps)(BiddingComponent);
