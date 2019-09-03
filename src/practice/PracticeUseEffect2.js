import React from 'react';

/*
  Instructions:
    You'll notice below that we have a Wait component.
    The purpose of Wait is to render the `ui` prop after
    `delay` seconds. Before `delay` seconds, it should
    render `placeholder`.
*/

function Wait({ delay = 1000, placeholder, ui }) {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, delay);
  }, [show, delay]);

  return show ? ui : placeholder;
}

function PracticeUseEffect2() {
  return (
    <div className="App">
      <Wait
        delay={3000}
        placeholder={<p>Waiting...</p>}
        ui={<p>This text should appear after 3 seconds.</p>}
      />
    </div>
  );
}

export default PracticeUseEffect2;
