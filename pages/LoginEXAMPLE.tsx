import React, { useRef } from 'react';
function App() {
  const mytext = useRef<HTMLInputElement | null>(null);
  function test() {
    console.log(mytext.current?.value);
  }
  return (
    <div className="App">
      <input type="text" id="ddddd" ref={mytext} />
      <button onClick={() => test()}>Add</button>
    </div>
  );
}
export default App;