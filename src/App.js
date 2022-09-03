import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Default from "./Components/Default";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

function App() {
    return (
        <div className="h-screen bg-cyan-100">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Default />} />
            </Routes>
            <Nav />
        </div>
    );
}

export default App;
