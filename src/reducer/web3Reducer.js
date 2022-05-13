import {
  SET_ACCOUNT_DATA,
  SET_HIGHEST_BID,
  SET_NEW_CONTRACT,
  SET_WEB3_ERROR,
  SET_WEB3_INSTANCE,
} from "../actions/web3Actions";

let initialState = {
  web3Client: null,
  accountAddress: null,
  balance: 0,
  error: {},
  contractMeta: {
    address: "0x7fEBAB072046165f86f5DC7Bb42efA3A8E8224dc",
    abi: [
      {
        type: "constructor",
        inputs: [{ name: "_owner", type: "address", internalType: "address" }],
        stateMutability: "nonpayable",
      },
      {
        name: "bid_amounts",
        type: "function",
        inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
      {
        name: "bidders",
        type: "function",
        inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
      {
        name: "bids",
        type: "function",
        inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
      {
        name: "bidsCount",
        type: "function",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
      {
        name: "cancelAuction",
        type: "function",
        inputs: [],
        outputs: [{ name: "success", type: "bool", internalType: "bool" }],
        stateMutability: "nonpayable",
      },
      {
        name: "canceled",
        type: "function",
        inputs: [],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
      },
      {
        name: "endBlock",
        type: "function",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
      {
        name: "fundsByBidder",
        type: "function",
        inputs: [{ name: "", type: "address", internalType: "address" }],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
      {
        name: "getBidAmounts",
        type: "function",
        inputs: [],
        outputs: [{ name: "", type: "uint256[]", internalType: "uint256[]" }],
        stateMutability: "view",
      },
      {
        name: "getBidders",
        type: "function",
        inputs: [],
        outputs: [{ name: "", type: "address[]", internalType: "address[]" }],
        stateMutability: "view",
      },
      {
        name: "getWinner",
        type: "function",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
      {
        name: "highestBid",
        type: "function",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
      {
        name: "highestBidder",
        type: "function",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
      {
        name: "owner",
        type: "function",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
      {
        name: "placeBid",
        type: "function",
        inputs: [{ name: "xyz", type: "uint256", internalType: "uint256" }],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "nonpayable",
      },
      {
        name: "property_name",
        type: "function",
        inputs: [],
        outputs: [{ name: "", type: "string", internalType: "string" }],
        stateMutability: "view",
      },
      {
        name: "setWinner",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "startBlock",
        type: "function",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
      {
        name: "status",
        type: "function",
        inputs: [],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
      },
      {
        name: "winner",
        type: "function",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
    ],
  },
  highestBidPrice: 0,
};

export default function web3Reducer(state, action) {
  state = state || initialState;
  const { type, payload } = action;

  switch (type) {
    case SET_WEB3_INSTANCE:
      const web3Client = payload;
      return { ...state, web3Client };

    case SET_WEB3_ERROR:
      const error = payload;
      return { ...state, error };

    case SET_ACCOUNT_DATA:
      return { ...state, ...payload, error: {} };

    case SET_NEW_CONTRACT:
      return {
        ...state,
        contractMeta: { ...state.contractMeta, contract: payload },
      };

    case SET_HIGHEST_BID:
      return {
        ...state,
        highestBidPrice: payload,
      };

    default:
      return state;
  }
}

