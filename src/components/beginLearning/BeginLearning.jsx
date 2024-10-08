import './beginLearning.css'
import { Link } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';

const BeginLearning = () => {
    return ( 
        <div className='mmain'>
          <div className="container">
           <div className="contents-1">
                <h1 className='contents-1-h1'>Personalized learning that gets result</h1>
                <h3 className='contents-1-h3'>Empower your learning journey with our data-driven approach and supportive community</h3>
                <h3 className='contents-1-h3-2'>Here's why you should choose us;</h3>
           </div>
           <div className="contents-2">
            <div className="sub-content s-1">
                <div className="a-icon"></div>
                <h2 className='sub-content-1-h2'>Vibrant community learners</h2>
                <h3 className='sub-content-1-h3'>Connect and collaborate with like-mindede individuals, foostering a sense belonging and enriching your learning experience</h3>
            </div>
            <div className="sub-content s-2">
            <h2 className='sub-content-2-h2'>Expert Guidance & Mentorship</h2>
            <h3 className='sub-content-2-h3'>Gain direct support and motivation from experienced tutors through our live classes </h3>
            <div className="b-icon"></div>
            </div>
            <div className="sub-content s-3">
            <h2 className='sub-content-3-h2'>Personalized Learning Paths</h2>
            <h3 className='sub-content-3-h3'>Our platform adapts to your individual needs, ensuring you progress at your own pace and maximize your learning  potential</h3>
            <div className="c-icon"></div>
            </div>
            <div className="sub-content s-4">
            <div className="d-icon"></div>
            <h2 className='sub-content-4-h2'>Structured Learning Environment</h2>
            <h3 className='sub-content-4-h3'>Access a well-organized LMS with all the resources you need, including clear courses structures, recording and learning trackers</h3>
            </div>
            </div>
           </div>
            
            <div className="button">
            <Link className='button-light one' to={'./signup'}>Begin your Learning Journey<i className="bx bx-right-arrow-alt button-icon"></i></Link>
            </div>
        
        </div>
     );
}
 
export default BeginLearning;