import React from 'react';
import './TransferList.css';

function TransferList({transfers, approveTransfer}){
  return (
    <div className="TransferList-body">
      <h2>Transfers</h2>
      <table className="TransferList-table">
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
                <button onClick={() => approveTransfer(transfer.id)}>Approve</button>
              </td>
              <td>{transfer.sent ? 'yes' : 'no'}</td>
            </tr>
          ))}
        </tbody>
    </table>
    </div>
  )
}

export default TransferList;
