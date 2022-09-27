import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage/HomePage";
import Features from "./pages/Features";
import Business from "./pages/Business";
import Gaming from "./pages/Gaming";
import Shop from "./pages/Shop";
import Health from "./pages/Health";
import Technology from "./pages/Technology";
import Blog from "./pages/Blog";
import ErrorPage from "./pages/ErrorPage";
import SinglePage from "./pages/SinglePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="bg-white absolute right-2 z-100 bottom-5 rounded-full p-2 h">
        <p>up</p>
      </div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/Features" element={<Features />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/Gaming " element={<Gaming />} />
        <Route path="/Shop " element={<Shop />} />
        <Route path="/Health " element={<Health />} />
        <Route path="/Technology " element={<Technology />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog:slug" element={<SinglePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
