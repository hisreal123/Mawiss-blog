import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import ErrorPage from "./pages/ErrorPage";
import SinglePage from "./pages/SinglePage";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Header from 


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog:slug" element={<SinglePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
