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
    address: "0x8879dF37c0ad41964a3088121fF9d26D53e3fDFF",
    abi: [
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
      return { ...state, contractMeta: {...state.contractMeta, contract: payload}};

    default:
      return state;
  }
}

