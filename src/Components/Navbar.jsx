import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import './Styles/navbar.css'
import './Styles/Necessary.css'
import './Styles/Universal.css'

function Navbar() {
    return (
        <div>
            <header className="doc_header">
                <nav className="dis-flex align-center padding01">

                    <Link to='/'
                        className="pTectColor padding01 ">
                        <h2 className="padding01">A|R Notes...</h2>
                    </Link>

                </nav>
            </header>
        </div>
    );
}

export default Navbar;
