import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import Room from "./Room";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomID" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
