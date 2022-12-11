import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Compra from "./pages/Compra.jsx";
import Confirmacion from "./pages/Confirmacion.jsx";

function App() {
  return (
    <div className="background">
      <div className="overlay">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Compra />} />
          <Route path="/confirm" element={<Confirmacion />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
