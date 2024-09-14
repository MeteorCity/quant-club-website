import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Join from "./pages/Join";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/join" element={<Join/>}/>
      </Routes>
    </div>
  );
}

export default App;
