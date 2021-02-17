import React from 'react';
import './Header.css';

function Header({approvers, quorum}) {
  return (
    <header className="Header">
      <ul className="Header-list">
        <li><strong>Approver 1</strong>: {approvers[0]}</li>
        <li><strong>Approver 2</strong>: {approvers[1]}</li>
        <li><strong>Approver 3</strong>: {approvers[2]}</li>
        <li><strong>Quorum</strong>: {quorum}&nbsp;out of 3 necessary</li>
      </ul>
    </header>
  );
};

export default Header;
