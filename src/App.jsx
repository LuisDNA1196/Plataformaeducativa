import Home from "./components/home/Home";
import { Routes, Route } from "react-router";
import Login from "./components/login/Login";


function App() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="login" element={<Login/>} />
    </Routes>
  );
}

export default App;
