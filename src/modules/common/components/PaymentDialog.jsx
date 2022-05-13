import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Checkbox, InputAdornment } from '@mui/material';
import { connect } from 'react-redux';

function PaymentDialog({open, onClose, highestBidPrice, contract, web3Client, accountAddress, balance}) {
  const currentMaxBid = 300;
  const [agree, setAgree] = React.useState(false);
  const [bidValue, setBidValue] = React.useState('');
  const [error, setError] = React.useState();

  const updateBid = (amount) => {
    setBidValue(amount);
    setError();
  }

  const placeBid = async () => {
    if (bidValue > balance * 1000 ) {
      setError("You don't have sufficient funds to bid");
    }
    else if (bidValue > highestBidPrice) {
      const bidAddress = await contract.methods.placeBid(bidValue).send(
        {from: accountAddress}
        // {from: accountAddress, value: web3Client.utils.toWei('5', "wei"),}
      );
      console.log('=====>>> ', bidAddress);
      console.log('=====>>> ', JSON.stringify(bidAddress))
    } else {
      setError("Bid amount should be more than the highest bid!")
    }
  }

  return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle style={{paddingLeft: '1rem'}}>Place your bid</DialogTitle>
        <DialogContent style={{padding: '0 1rem'}}>
          <TextField
            autoFocus
            margin="dense"
            id="starting-bid"
            label="Starting bid"
            fullWidth
            variant="standard"
            aria-readonly
            disabled
            value={currentMaxBid}
            InputProps={{
              startAdornment: <InputAdornment position="start">ETH</InputAdornment>,
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="your-max-bid"
            label="Your max bid"
            fullWidth
            variant="standard"
            value={bidValue}
            onChange={(e) => {updateBid(e.target.value)}}
            InputProps={{
              startAdornment: <InputAdornment position="start">ETH</InputAdornment>,
            }}
          />
        <div style={{marginTop: '1rem'}}>
          <Checkbox checked={agree} onChange={() => {setAgree(!agree)}} style={{color: 'black', float: 'left'}} />
          I have read and I agree to the bidding agreement. I understand that blockchain transactions are irreversible if I win the bid.
        </div>
        </DialogContent>
        {error && <div style={{color: 'red', margin: '0.5rem 2rem'}}>{error}</div>}
        <DialogActions style={{margin: '0 0.5rem 0.5rem'}}>
          <Button style={{color: 'black'}} onClick={onClose}>Cancel</Button>
          <Button
          style={{
            background: agree ? "#f24727" : "#aaaaaa",
            color: "white",
            padding: "10px",
            fontWeight: "bold"
          }}
          disabled={!agree}
          onClick={placeBid}
        >
          Place Bid
        </Button>
        </DialogActions>
      </Dialog>
  );
}

const mapStateToProps = (state) => ({
  balance: state.web3Reducer.balance,
  accountAddress: state.web3Reducer.accountAddress,
  web3Client: state.web3Reducer.web3Client,
  contract: state.web3Reducer.contractMeta.contract,
  highestBidPrice: state.web3Reducer.highestBidPrice
});

export default connect(mapStateToProps)(PaymentDialog);