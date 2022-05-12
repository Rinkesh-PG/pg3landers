import { Button, Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Web3 from "web3";
import {
  setAccountData,
  setWeb3Error,
  connect2Contract,
  setWeb3Client,
} from "../../../actions/web3Actions";
import OutlinedButton from "../../common/components/OutlinedButton";
import MetamaskLogo from "../../../assets/svg/Metamask-logo.svg";

const Wallet = ({
  setAccountDataProp,
  metamaskError,
  balance,
  accountAddress,
  connect2ContractProp,
  web3Client,
  contract,
  setWeb3ClientProp,
}) => {
  const dispatch = useDispatch();
  // TODO: Remove examples of how to call contract
  useEffect(() => {
    const fun = async () => {
      if (web3Client && contract) {
        const manager = await contract.methods
          .setGreeting("Namaste")
          .send({ from: accountAddress });
        // const players = await contract.methods.getPlayers().call();
        console.log("===> manager & Players : ", manager);
      }
    };
    fun();
  }, [web3Client, contract]);

  useEffect(() => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      dispatch(setWeb3ClientProp(web3));
    }
  }, []);

  const linkWallet = async () => {
    if (window.ethereum) {
      try {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        dispatch(setAccountDataProp(account[0]));
      } catch (error) {
        if (error.code === 4001) {
          dispatch(setWeb3Error(error));
        }
      }
    } else {
      alert("install metamask extension!!");
    }
  };

  return (
    <Card variant="outlined" style={{width: '300px', padding: '2rem'}}>
      <Typography sx={{ fontSize: 16 }} gutterBottom>
        Connect with your available metamask wallet or create a new wallet to
        Sign in.
      </Typography>
      <div style={{ textAlign: "center", marginTop: '1.5rem' }}>
        <OutlinedButton onClick={linkWallet}>
          <div>
            Connect
            <img
              style={{
                height: "18px",
                paddingLeft: "1.5rem",
                verticalAlign: "text-bottom",
              }}
              src={MetamaskLogo}
            />
          </div>
        </OutlinedButton>
      </div>
    </Card>
    // <div style={{ width: "300px", margin: "auto" }}>
    //   <h1>Welcome to PropertyGuru Auctions</h1>
    //   <div>
    //     Connect with your available metamask wallet or create a new wallet to
    //     Sign in.
    //     <div style={{ margin: "1rem 0" }}>
    //       <Button onClick={linkWallet} variant="outlined">
    //         Link Now
    //       </Button>
    //     </div>
    //   </div>
    //   {metamaskError.message && (
    //     <p style={{ color: "red" }}>{metamaskError.message}</p>
    //   )}
    //   <p>{accountAddress}</p>
    //   <strong>Balance: </strong>
    //   {balance}
    //   <br />
    //   <div>
    //     <Button variant="primary" onClick={connect2ContractProp}>
    //       Connect Contract
    //     </Button>
    //   </div>
    // </div>
  );
};

const mapStateToProps = (state, _ownProps) => ({
  metamaskError: state.web3Reducer.error,
  balance: state.web3Reducer.balance,
  accountAddress: state.web3Reducer.accountAddress,
  web3Client: state.web3Reducer.web3Client,
  contract: state.web3Reducer.contractMeta.contract,
});

const mapDispatchToProps = dispatch => {
  return {
    setAccountDataProp: address => dispatch(setAccountData(address)),
    connect2ContractProp: () => dispatch(connect2Contract()),
    setWeb3ClientProp: client => dispatch(setWeb3Client(client)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

