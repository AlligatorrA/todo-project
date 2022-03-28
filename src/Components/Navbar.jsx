import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import './Styles/navbar.css'
import './Styles/Necessary.css'
import './Styles/Universal.css'
import './Styles/Aside.css'

function Navbar() {
    return (
        <div>
            <header className="doc_header">
                <nav className="dis-flex align-center padding01">

                    <Link to='/'
                        className="pTectColor padding01 ">
                        <h2 className="padding01">A|R Notes...</h2>
                    </Link>

                    <div className="padding01 margin-left options_nav dis-flex align-center ">
                        <span id="dark-theme" className="padding01 btn ">
                            <i className="fa-solid fa-sun"></i>
                        </span>
                    </div>

                </nav>
            </header>
        </div>
    );
}

export default Navbar;
