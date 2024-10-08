import React from 'react';
import './HitSection.css'
import { Link } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';


const HitSection = () => {
    return ( 
        <>
     

        <div className="hit-content">
            <div className="hit hit-1">
                <div className="pic pic-1"></div>
                <div className="pic pic-2"></div>
            </div>
            <div className="hit hit-2 libre-baskerville-bold" >
                <h1> Ignite your potential.</h1>
                <h1> Land your Dream Job</h1>
                
            </div>
            <div className="hit hit-3 libre-baskerville-regular">
                <h3> Blizzcode Academy empowers you with skills and guidance</h3>
                <h3>to strive in the tech industry</h3>
            </div>
            <div className="hit hit-4">
                <Link className='button-light one' to={'./signup'}>Get Started for free <i className="bx bx-right-arrow-alt button-icon"></i></Link>
                <Link className='button-light two' to={'./signup'}>Continue learning<i className="bx bx-right-arrow-alt button-icon"></i></Link>
            </div>
            <div className="hit hit-5">
            <div className="pic pic-3"></div>
            </div>
        </div>
        </>
     );
}
 
export default HitSection;