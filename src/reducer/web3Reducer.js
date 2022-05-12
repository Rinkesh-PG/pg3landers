import {
  SET_ACCOUNT_DATA,
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
    address: "0xF2E246BB76DF876Cef8b38ae84130F4F55De395b",
    /* abi: [
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
        signature: "constructor",
      },
      {
        inputs: [],
        name: "enter",
        outputs: [],
        stateMutability: "payable",
        type: "function",
        payable: true,
        signature: "0xe97dcb62",
      },
      {
        inputs: [],
        name: "getPlayers",
        outputs: [
          { internalType: "address payable[]", name: "", type: "address[]" },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
        signature: "0x8b5b9ccc",
      },
      {
        inputs: [],
        name: "manager",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
        constant: true,
        signature: "0x481c6a75",
      },
      {
        inputs: [],
        name: "pickWinner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x5d495aea",
      },
      {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "players",
        outputs: [
          { internalType: "address payable", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
        signature: "0xf71d96cb",
      },
    ], */
    abi: [
      { type: "constructor", inputs: [], stateMutability: "nonpayable" },
      {
        name: "greet",
        type: "function",
        inputs: [],
        outputs: [{ name: "", type: "string", internalType: "string" }],
        stateMutability: "view",
      },
      {
        name: "greeting",
        type: "function",
        inputs: [],
        outputs: [{ name: "", type: "string", internalType: "string" }],
        stateMutability: "view",
      },
      {
        name: "setGreeting",
        type: "function",
        inputs: [{ name: "_greeting", type: "string", internalType: "string" }],
        outputs: [],
        stateMutability: "nonpayable",
      },
    ],
  },
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

    default:
      return state;
  }
}

