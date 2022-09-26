import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import * from "./pages";
import Nav from "./components/Nav";

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
