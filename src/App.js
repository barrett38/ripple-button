import React from "react";
import ExpandingButton from "./ExpandingButton/ExpandingButton";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <ExpandingButton label="Let's Go!" onClick={handleClick} />
    </div>
  );
}

export default App;
