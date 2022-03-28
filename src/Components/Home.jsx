import React from 'react'

import './Styles/Home.css'

function Home() {
    return (
        <div >
            <div className="homContainer">
                <div className="leftSideBox marginAll dis-flex coln-flex  just-center align-center">
                    <div className="spacerhalf"></div>
                    <h1>Time</h1>
                    <h2 className='marginAll'>No Seiously! What is Time..?</h2>
                    <div className="spacerhalf"></div>
                    <h2>Is Time Linear, Spiral or a 'Never Ending Circle'...?</h2>
                    <p className='marginAll'><b><i>'The end is the beginning, and the beginning is the end.'</i>...#Dark</b></p>
                    <h3>lets Explore Together</h3>
                    <div className="spacerhalf"></div>
                    <h1 className='marginAll'>60% off on 1st buy.</h1>
                    <div className="  dis-flex just-center ">

                        <button className='  pTectColor  btn '>  Buy Watch </button>


                        <button className='pTectColor  btn '>  Travel Through Time   </button>

                    </div>
                </div>
                <div className="rightSideBox marginAll">
                    <img className='img-div' src='https://cdnb.artstation.com/p/assets/images/images/011/015/455/large/syed-ali-qaiser-time5.jpg?1527439615' width='100%' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home