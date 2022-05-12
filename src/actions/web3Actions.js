import { ethers } from "ethers";
import Web3 from "web3";
import { newContract } from "../util/contract";

export const SET_WEB3_INSTANCE = "SET_WEB3_INSTANCE";
export const SET_WEB3_ERROR = "SET_WEB3_ERROR";
export const SET_ACCOUNT_DATA = "SET_ACCOUNT_DATA";
export const SET_NEW_CONTRACT = "SET_NEW_CONTRACT";
export const SET_HIGHEST_BID = "SET_HIGHEST_BID";

export const setWeb3Client = instance => {
  return {
    type: SET_WEB3_INSTANCE,
    payload: instance,
  };
};

export const setHighestBidPrice = price => {
    return {
        type: SET_HIGHEST_BID,
        payload: price
    }
};

export const setWeb3Error = error => {
  return {
    type: SET_WEB3_ERROR,
    payload: error,
  };
};

export const setAccountData = address => {
  return async dispatch => {
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [address, "latest"],
      });
      const etherBal = ethers.utils.formatEther(balance);

      dispatch({
        type: SET_ACCOUNT_DATA,
        payload: { accountAddress: address, balance: etherBal },
      });
    //   const web3 = new Web3(window.ethereum)
    //   dispatch(setWeb3Client(web3))
    } catch (error) {
      setWeb3Error(error);
    }
  };
};

export const connect2Contract = () => {
  return (dispatch, getState) => {
    const contractMeta = getState().web3Reducer.contractMeta;
    const web3Client = getState().web3Reducer.web3Client;
    const contract = newContract(contractMeta, web3Client);
    dispatch({ type: SET_NEW_CONTRACT, payload: contract });
  };
};
