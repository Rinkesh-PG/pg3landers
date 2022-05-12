import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { InputAdornment } from '@mui/material';

export default function FormDialog({open, onClose}) {
  const currentMaxBid = 300;
  const [bidValue, setBidValue] = React.useState();

  return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Place your bid</DialogTitle>
        <DialogContent>
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
            onChange={(e) => {setBidValue(e.target.value)}}
            InputProps={{
              startAdornment: <InputAdornment position="start">ETH</InputAdornment>,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button
          style={{
            background: "#f24727",
            color: "white",
            padding: "10px",
            fontWeight: "bold",
          }}
          onClick={onClose}
        >
          Place Bid
        </Button>
        </DialogActions>
      </Dialog>
  );
}
