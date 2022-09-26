import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import SinglePage from "./pages/SinglePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog:slug" element={<SinglePage />} />
      <Route path="*" element={<Err />} />
    </Routes>
  );
}

export default App;
