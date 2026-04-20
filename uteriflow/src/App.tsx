import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import TipDetail from "./pages/TipDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<TipDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
