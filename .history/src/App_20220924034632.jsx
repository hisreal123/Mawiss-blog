import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import ErrorPage from "./pages/ErrorPage";
import Home from " ./pages/Home";
import SinglePage from "./pages/SinglePage";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog:slug" element={<SinglePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
