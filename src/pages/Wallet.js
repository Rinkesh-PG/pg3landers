import { Button } from "@mui/material";
import React from "react";
import { connect, useDispatch } from "react-redux";
import { setAccountData, setWeb3Error } from "../actions/web3Actions";

const Wallet = ({
  setAccountDataProp,
  metamaskError,
  balance,
  accountAddress,
}) => {
  const dispatch = useDispatch();

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
    <div style={{width: '300px', margin: 'auto'}}>
      <h1>Welcome to PropertyGuru Auctions</h1>
      <div>
        Connect with your available metamask wallet or create a new wallet to Sign in.
        <div style={{margin: '1rem 0'}}><Button onClick={linkWallet} variant="outlined">Link Now</Button></div>
      </div>
      {metamaskError.message && (
        <p style={{ color: "red" }}>{metamaskError.message}</p>
      )}
      <p>{accountAddress}</p>
      <strong>Balance: </strong>
      {balance}
    </div>
  );
};

const mapStateToProps = (state, _ownProps) => ({
  metamaskError: state.web3Reducer.error,
  balance: state.web3Reducer.balance,
  accountAddress: state.web3Reducer.accountAddress,
});

const mapDispatchToProps = dispatch => {
  return {
    setAccountDataProp: address => dispatch(setAccountData(address)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

