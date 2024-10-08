import { Link } from "react-router-dom";
import data from "./data";
import "./ourCourses.css"
import 'boxicons/css/boxicons.min.css';

const OurCourses = () => {
    return ( 
 
    <div className="container">
      <div className="ourcourses">
            <div className="ourcourses-1">
              <h1>Our Courses</h1></div>
            <div className="ourcourses-2"><h3>Empower your learning journey with our data-driven approach and supportive community. Here's why you should choose us</h3></div>
            <div className="ourcourses-3">
            <Link className='button-lightt' to={'./signup'}>Start learning<i className="bx bx-right-arrow-alt button-icon"></i></Link>
              </div>
              </div>
      {data.map((item, index) => (
        <div key={index} className="sub-div">
          <div className="content-div">
            <h2>{item.course}</h2>
            <h3>{item.text}</h3> 
           <h4> <span className="h41">{item.level}     </span>
           <span className="h42">{item.duration}</span></h4>
            {/* Text in the first div */}
          </div>
          <div className="content-div">
            <img src={item.imageUrl} alt={item.alt} /> {/* Image in the second div */}
          </div>
          <div className="content-div">
            <button><i className="bx bx-right-arrow-alt button-icon"></i></button> {/* Button in the third div */}
          </div>
    </div>
      ))}
    </div>

        
     );
}
 
export default OurCourses;





 


