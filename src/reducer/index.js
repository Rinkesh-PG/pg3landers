import { combineReducers } from 'redux';
import web3Reducer from './web3Reducer';

const appReducer = combineReducers({
    web3Reducer,
});

export default appReducer;