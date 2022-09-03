import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Default from "./Components/Default";
import Home from "./Components/Home";

function App() {
    return (
        <div className="h-screen bg-black">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Default />} />
            </Routes>
        </div>
    );
}

export default App;
