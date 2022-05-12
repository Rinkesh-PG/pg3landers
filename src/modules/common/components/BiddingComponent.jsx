import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Card,
} from "@mui/material";
import Ether from "../../../assets/svg/Ether.svg";
import { formatCurrency } from "../../../util/common";
import PaymentDialog from "./PaymentDialog";
const etherConvRate = 1925.8;

export default ({highestBidPrice}) => {
    const [open, setOpen] = useState(false);
    const toggleDialog = val => {
        setOpen(val);
      };
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
              ${formatCurrency(highestBidPrice * etherConvRate)}
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
              ${formatCurrency(450 * etherConvRate)}
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
      </div>
      <PaymentDialog open={open} onClose={() => toggleDialog(false)} />
    </Card>
  );
};
