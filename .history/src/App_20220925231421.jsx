import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import ErrorPage from "./pages/ErrorPage";
import SinglePage from "./pages/SinglePage";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import Banner from "./components/Banner";
import Features from "./pages/Features"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Banner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Business" element={ <Business /> } />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog:slug" element={<SinglePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
