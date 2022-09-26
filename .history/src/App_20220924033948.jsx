import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
