import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 25px;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  transition: 0.3s;
  align-items: center;
  text-decoration: none;

  :hover {
    background: white;
    color: black;
  }
`

const Typography = styled.p`
  font-size: 35px;
  font-weight: 900;
  margin-top: 50px;
  margin-bottom: 0px;
`

const TransferListDiv = styled.div`
  margin: auto;
`


function TransferList({transfers, approveTransfer}){
  return (
    <TransferListDiv>
      <Typography>Transfers</Typography>
      <table>
        <thead>
          <tr>
          <th>Id</th>
          <th>Amount</th>
          <th>To</th>
          <th>Approvals</th>
          <th>Sent</th>
    </tr>
    </thead>
        <tbody>
          {transfers.map(transfer => (
            <tr key={transfer.id}>
              <td>{transfer.id}</td>
              <td>{transfer.amount}</td>
              <td>{transfer.to}</td>
              <td>
                {transfer.approvals}
                <Button onClick={() => approveTransfer(transfer.id)}>Approve</Button>
              </td>
              <td>{transfer.sent ? 'yes' : 'no'}</td>
            </tr>
          ))}
        </tbody>
    </table>
    </TransferListDiv>
  )
}

export default TransferList;
