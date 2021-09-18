import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  margin: auto;
  width: 100%;
  text-align: left;
`

const HeaderList = styled.li`
  list-style-type: none;
`

function Header({approvers, quorum}) {
  return (
    <HeaderDiv>
      <ul>
        <HeaderList><strong>Approver 1</strong>: {approvers[0]}</HeaderList>
        <HeaderList><strong>Approver 2</strong>: {approvers[1]}</HeaderList>
        <HeaderList><strong>Approver 3</strong>: {approvers[2]}</HeaderList><br></br>
        <HeaderList><strong>Quorum</strong>: {quorum}&nbsp;out of 3 necessary</HeaderList>
      </ul>
    </HeaderDiv>
  );
};

export default Header;
