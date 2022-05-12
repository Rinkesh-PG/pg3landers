import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const OutlinedButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  color: 'black',
  padding: '6px 12px',
  border: '2px solid black',
  lineHeight: 1.5,
  backgroundColor: '#ffffff',
  '&:hover': {
    backgroundColor: '#00000030',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#00000030',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

export default (props) => {
  return (
      <OutlinedButton variant="contained" onClick={props.onClick}>
          {props.children}
      </OutlinedButton>
  );
}
