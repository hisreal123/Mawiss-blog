import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element=''/>
    </Routes>
  );
}

export default App;
