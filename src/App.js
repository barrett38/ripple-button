import React from "react";
import AnimatedButton from "./RippleButton/RippleButton";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <AnimatedButton label="Let's Go!" onClick={handleClick} />
    </div>
  );
}

export default App;
