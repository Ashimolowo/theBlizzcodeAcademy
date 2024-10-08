import { Link } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';

const LearningButton = () => {
    return ( 
        <div className="button" style={{marginTop: '50px', marginBottom: '10px'}}>
        <Link className='button-light one' to={'./signup'}>Begin your Learning Journey<i className="bx bx-right-arrow-alt button-icon"></i></Link>
        </div>
     );
}
 
export default LearningButton;