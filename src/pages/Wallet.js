import React, {useEffect} from "react";
import { connect, useDispatch } from "react-redux";
import { requestMetaMaskAccess } from "../actions/web3Actions";

const Wallet = ({connectWallet, metamaskError}) => {
  const dispatch = useDispatch();

  const linkWallet = () => {
      console.log('click');
    return dispatch(connectWallet());
  }

  return (
    <div>
      <h1>Welcome to PropertyGuru Auctions</h1>
      <div>
        To participate in the auctions link your account!
        <button onClick={linkWallet}>Link Now</button>
      </div>
      {metamaskError.message && <p style={{color: 'red'}}>{metamaskError.message}</p>}
    </div>
  );
};

const mapStateToProps = (state, _ownProps) => {
  return { metamaskError: state.web3Reducer.error }
}

const mapDispatchToProps = (dispatch) => {
  return {
    connectWallet: () => dispatch(requestMetaMaskAccess())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
