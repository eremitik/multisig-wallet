import React, {useState} from 'react';

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
      <h2>Create transfer</h2>
      <form onSubmit={(e) => submit(e)}>
        <div><label htmlFor="amount">KETH (Wei qty) </label>
        <input
          id="amount"
          type="text"
          onChange={e => updateTransfer(e, 'amount')}
        />
        </div>

        <div><label htmlFor="to">Send to addy. &nbsp;&nbsp;  </label>
        <input
          id="to"
          type="text"
          onChange={e => updateTransfer(e, 'to')}
        /></div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default NewTransfer;
