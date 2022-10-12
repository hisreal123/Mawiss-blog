import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage/HomePage";
import Features from "./pages/Features";
import Business from "./pages/Business";
import Gaming from "./pages/Gaming";
import Shop from "./pages/Shop";
import Health from "./pages/Health";
import Technology from "./pages/Technology";
import Blog from "./pages/Blog/Blog";
import ErrorPage from "./pages/ErrorPage";
import SinglePage from "./pages/SinglePage";
import Footer from "./components/Footer";
import ToTop from "./components/Top";

function App() {
  return (
    <div className="app z-10 transition-all duration-300 ">
      <Nav idTop="NavTop" />
      <ToTop id="#NavTop" />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/Features" element={<Features />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/Gaming " element={<Gaming />} />
        <Route path="/Shop " element={<Shop />} />
        <Route path="/Health " element={<Health />} />
        <Route path="/Technology " element={<Technology />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<SinglePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
