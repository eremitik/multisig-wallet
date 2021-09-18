import React, {useEffect, useState} from 'react';
import {getWeb3, getWallet} from './utils.js';
import Header from './components/Header.js';
import NewTransfer from './components/NewTransfer.js';
import TransferList from './components/TransferList.js';
import styled, { css } from 'styled-components';

const Typography = styled.p`
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 25px;
  margin-top: 0px;

  ${props => props.subtitle && css`
    font-size: 20px;
    font-weight: 800; 
    color: #383838;
  `}
`

const Container = styled.div `
  background-color: black;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

function App() {
  const [web3, setWeb3] = useState(undefined); 
  const [accounts, setAccounts] = useState(undefined); 
  const [wallet, setWallet] = useState(undefined); 
  const [approvers, setApprovers] = useState([]);
  const [quorum, setQuorum] = useState(undefined);
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const wallet = await getWallet(web3);
      const approvers = await wallet.methods.getApprovers().call();
      const quorum = await wallet.methods.quorum().call();
      const transfers = await wallet.methods.getTransfers().call();
      setWeb3(web3);
      setAccounts(accounts);
      setWallet(wallet);
      setApprovers(approvers);
      setQuorum(quorum);
      setTransfers(transfers);
    };
    init();
  }, []);

  const createTransfer = transfer => {
    wallet.methods
      .createTransfer(transfer.amount, transfer.to)
      .send({from: accounts[0]});
  }

  const approveTransfer = transferId => {
    wallet.methods
      .approveTransfer(transferId)
      .send({from: accounts[0]});
  }

  if(
    typeof web3 === 'undefined'
    || typeof accounts === 'undefined'
    || typeof wallet === 'undefined'
    || approvers.length === 0 
    || typeof quorum === 'undefined'
  ) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Typography>Multisig Wallet</Typography>
      <Typography subtitle>This Dapp interacts with the Kovan testnet. Please do NOT send mainnet ETH.<br/>Input the amount of KETH in WEI amount, and the receiver's Kovan address.</Typography>
      <Header approvers={approvers} quorum={quorum} />
      <NewTransfer createTransfer={createTransfer} />
      <TransferList transfers={transfers} approveTransfer={approveTransfer}/>
    </Container>
  );
}

export default App;
