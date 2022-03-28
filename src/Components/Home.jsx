import React from 'react'

import './Styles/Home.css'
import './Styles/Product.css'

function Home() {
    return (
        // <div >
        <div className="homContainer">
            <div className="leftSideBox marginAll card-footer coln-flex">
                <div className="spacerhalf "></div>
                <div>

                    <h1 className=' marginAll'>Here is your  Modern </h1>
                    <h1 className='pTectColor marginAll'>Note Taking App</h1>
                    <p className=' font1en  marginAll '><b>manage your daily notes in just one click... </b>daily task in modern way without any effort <b>store your notes and important information degitally</b></p>

                    <div className="spacer01"></div>
                </div>
                <div className=''>

                    <button className='pTectColor  btn font1en marginAll'>  Join Now</button>
                    <button className='pTectColor  btn font1en marginAll'>  Already have an account</button>

                </div>
            </div>
            <div className="rightSideBox marginAll">
                <img className='img-div' src='https://www.onlineclassassist.com/wp-content/uploads/2019/09/1524-Blog-Image-01-640-x-341-Note-Taking-Tips-for-Online-Students-1280x720.jpg' width='100%' alt="" />
            </div>
        </div>
        // </div>
    )
}

export default Home