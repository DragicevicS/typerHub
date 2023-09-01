import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Level from "./pages/Level.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/level/:difficulty/:lesson" element={<Level />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
