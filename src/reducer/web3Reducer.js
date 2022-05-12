import { SET_ACCOUNT_DATA, SET_WEB3_ERROR, SET_WEB3_INSTANCE } from "../actions/web3Actions";

let initialState = {
  accountAddress: null,
  balance: 0,
  error: {},
};

export default function web3Reducer(state, action) {
  state = state || initialState;
  const { type, payload } = action;

  switch (type) {
    case SET_WEB3_INSTANCE:
      const web3 = payload;
      return { ...state, web3 };

    case SET_WEB3_ERROR:
      const error = payload;
      return { ...state, error };

    case SET_ACCOUNT_DATA:
      return { ...state, ...payload, error: {} };

    default:
      return state;
  }
}

