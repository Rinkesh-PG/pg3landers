import Web3 from "web3";

export const SET_WEB3_INSTANCE = 'SET_WEB3_INSTANCE';
export const SET_WEB3_ERROR = 'SET_WEB3_ERROR';

export const setWeb3Client = (instance) => {
    return {
        type: SET_WEB3_INSTANCE,
        payload: instance
    };
};

export const setWeb3Error = (error) => {
    return {
        type: SET_WEB3_ERROR,
        payload: error
    };
};

export const requestMetaMaskAccess = () => {
    return async dispatch => {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const web3Client = await new Web3(window.ethereum);
            dispatch(setWeb3Client(web3Client));
        } catch(error) {
            dispatch(setWeb3Error(error));
        }
    }
}