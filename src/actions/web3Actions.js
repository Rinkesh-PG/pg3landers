import { ethers } from "ethers";

export const SET_WEB3_INSTANCE = "SET_WEB3_INSTANCE";
export const SET_WEB3_ERROR = "SET_WEB3_ERROR";
export const SET_ACCOUNT_DATA = "SET_ACCOUNT_DATA";

export const setWeb3Client = instance => {
  return {
    type: SET_WEB3_INSTANCE,
    payload: instance,
  };
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
      console.log('Ether bal : ', etherBal);
      dispatch({
        type: SET_ACCOUNT_DATA,
        payload: { accountAddress: address, balance: etherBal },
      });
    } catch (error) {
        console.log('====>>getting error')
      setWeb3Error(error);
    }
  };
};

// export const requestMetaMaskAccess = () => {
//     return async dispatch => {
//         try {
//             const account = await window.ethereum.request({ method: "eth_requestAccounts" });
//             const web3Client = await new Web3(window.ethereum);
//             dispatch(setWeb3Client(web3Client));
//         } catch(error) {
//             dispatch(setWeb3Error(error));
//             return;
//         }
//     }
// }

