import React from "react";

import './Styles/Aside.css'
import './Styles/navbar.css'
import './Styles/Necessary.css'
import './Styles/Universal.css'



const AsidebarFunc = () => {

    return (
        <aside className="doc_aside dis-flex coln-flex overflow">
            <div className="spacer01 "></div>
            <div className="container-flex">
                <button
                    className="font1en  pTectColor asideAlink padding01"
                    disabled
                >
                    Filter
                </button>
                <button className="font1en  pTectColor asideAlink padding01">
                    Clear detail
                </button>
            </div>
            <div className="spacerhalf"></div>
            <hr />
            <div className="spacerhalf"></div>


            <div className="spacerhalf"></div>
        </aside>
    );
};

export default AsidebarFunc;
