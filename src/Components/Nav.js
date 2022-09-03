import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0">
            <nav className="flex justify-center bg-cyan-700 text-white">
                <Link to="/" className="hover:bg-cyan-600 p-5 ">
                    Home
                </Link>
                <Link to="/shweyin" className="hover:bg-cyan-600 p-5">
                    Shweyin
                </Link>
                <Link to="/noa" className="hover:bg-cyan-600 p-5">
                    Noa
                </Link>
            </nav>
        </div>
    );
};

export default Nav;
