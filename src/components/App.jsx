import React from "react";

function App() {
  const [currentTime, SetTime] = React.useState(
    new Date().toLocaleTimeString()
  );

  function GetTime() {
    SetTime(new Date().toLocaleTimeString());
  }

  setInterval(GetTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      {/* <button onClick={GetTime}>Get Time</button> */}
    </div>
  );
}

export default App;
