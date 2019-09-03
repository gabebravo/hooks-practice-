import React from 'react';

export default function PracticeUseEffect1() {
  const [input, setInput] = React.useState('');

  React.useEffect(() => {
    document.title = `${240 - input.length} input chacters left`;
  });

  const submitField = () => console.log('input:', input);

  return (
    <div className="App" style={{ margin: '50px 0px' }}>
      <input value={input} onChange={ev => setInput(ev.target.value)} />
      <button
        disabled={input.length === 0 || input.length >= 240}
        onClick={submitField}
      >
        Submit
      </button>
    </div>
  );
}
