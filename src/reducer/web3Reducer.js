import {
  SET_ACCOUNT_DATA,
  SET_HIGHEST_BID,
  SET_NEW_CONTRACT,
  SET_WEB3_ERROR,
  SET_WEB3_INSTANCE,
  SET_BID_TRANSACTION,
  SET_LOADING,
  SET_AUCTION_WINNER,
  SET_USD_CONVERSION,
} from "../actions/web3Actions";

let initialState = {
  loading: false,
  web3Client: null,
  accountAddress: null,
  balance: 0,
  error: {},
  auctionWinner: null,
  contractMeta: {
    address: "0xfC4130317030ecf436b86Db681ec726bA1f7d289",
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
        name: "depositsByBidder",
        type: "function",
        inputs: [{ name: "", type: "address", internalType: "address" }],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
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
        name: "minDep",
        type: "function",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
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
        name: "reopenAuction",
        type: "function",
        inputs: [],
        outputs: [{ name: "success", type: "bool", internalType: "bool" }],
        stateMutability: "nonpayable",
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
        name: "totalDep",
        type: "function",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
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
  bidReference: null,
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

    case SET_BID_TRANSACTION:
      return {
        ...state,
        bidReference: payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };

    case SET_AUCTION_WINNER:
      return {
        ...state,
        auctionWinner: payload,
      };

    case SET_USD_CONVERSION:
      return {
        ...state,
        usdConversion: payload
      }

    default:
      return state;
  }
}

