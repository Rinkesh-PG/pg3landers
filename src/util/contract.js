export const newContract = ({address, abi}, web3) => {
  return new web3.eth.Contract(abi, address)
}
