import "./App.css";
import { Routes, Route } from "react-router-dom";
import Default from "./Components/Default";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Shweyin from "./Components/Shweyin";
import Noa from "./Components/Noa";

function App() {
    return (
        <div className="h-screen bg-cyan-100">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shweyin" element={<Shweyin />} />
                <Route path="/noa" element={<Noa />} />
                <Route path="*" element={<Default />} />
            </Routes>
            <Nav />
        </div>
    );
}

export default App;
