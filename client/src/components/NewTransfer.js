import React, {useState} from 'react';
import styled from 'styled-components';

const Typography = styled.p`
  font-size: 35px;
  font-weight: 900;
  margin-top: 50px;
  margin-bottom: 0px;
`

const Button = styled.button`
  margin-top: 25px;
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

const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid white;
  outline: none;
  color: white;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 10px;

  ::placeholder {
    color: #383838;
  }
`

function NewTransfer({createTransfer}) {
  const [transfer, setTransfer] = useState(undefined);

  const submit = e  => {
    e.preventDefault();
    createTransfer(transfer);
  }

  const updateTransfer = (e, field) => {
    const value = e.target.value;
    setTransfer({...transfer, [field]: value});
  }

  return(
    <div>
      <Typography>Create transfer</Typography>
      <form onSubmit={(e) => submit(e)}>
        <div>
        <Input
          id="amount"
          type="text"
          onChange={e => updateTransfer(e, 'amount')}
          placeholder="KETH Wei Qty."
        />
        </div>

        <div>
        <Input
          id="to"
          type="text"
          onChange={e => updateTransfer(e, 'to')}
          placeholder="Receiver's Address"
        /></div>
        <Button>Submit</Button>
      </form>
    </div>
  )
}

export default NewTransfer;
