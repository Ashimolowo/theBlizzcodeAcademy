import { Link } from "react-router-dom";
import './levelup.css'

const LevelUp = () => {
    return ( 
        <div className="eedata">
            <div className="data">
                <div className="screen"></div>
                <div className="data-">
                    <p className="p1">Data Analysis for Beginners; <br />
                    Unlocking the Power of <br /> information</p>
                    <p>Gain foundational skills in data analysis, visualization, and interpretaion to make data-driven decisions</p>
                    <div className="time">
                        <h4 style={{color: "blue", marginBottom: "-15px"}}>Tuesday, August 15th </h4>
                        <p>12:00PM</p>
                    </div> 
                     <div className="button"><i className="bx bx-right-arrow-alt div-icon"></i></div>
          
                </div>
            </div>
        <div className="level">
          <div className="level-1">
          <p className="p2">Level Up Your skills with <br /> Upcoming Events </p>
            <p>Dont just take our word for it Here's <br /> what our students are achieving</p>
            <button className="button-level"> 
              <Link to="./signup">
            view more events <i style={{ fontSize: '20px', marginLeft: '3px', transition: '.3s' }} className="bx bx-right-arrow-alt button-icon"></i>
          </Link></button>
          </div>

          <div className="event">
            <div className="ev ev-1"></div>
            <div className="ev ev-2"></div>
            <div className="ev ev-3"></div>
          </div>
        </div>
        </div>
     );
}
 
export default LevelUp;