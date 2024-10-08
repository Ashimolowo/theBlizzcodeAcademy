import { Link } from 'react-router-dom';
import './footer.css'
const Footer = () => {
    return ( 
        <div className="footer-div">
            <div className="footer-1">
                <div className="sub-footer-1">
                    <div className="footer-name -logo">
                        <h3>Blizzcode</h3>
                    </div>
                    <div className="footer-handle">

                        <div className="social">
                        <Link to="#" class="footer__social"><i class="bx bxl-facebook"></i></Link>
                        <Link to="#" class="footer__social"><i class="bx bxl-instagram"></i></Link>
                        <Link to="#" class="footer__social"><i class="bx bxl-twitter"></i></Link>
                        <Link to="#" class="footer__social"><i class="bx bxl-google"></i></Link>
                    
                        </div>
                        <div className="footer-button">
                        <button> join community </button>
                    </div>
                    </div>
                </div>
                <div className="sub-footer-2 quick-links">
                <div className="footer-name -links">
                        <h3>QUICK LINKS</h3>
                    </div>
                   <div className="links">
                   <Link to='/'> Home</Link>
                    <Link to="/aboutus"> About Us</Link>
                    <Link to="/events"> Events</Link>
                    <Link to="/contactus"> Contact Us</Link>
                   </div>
                </div>
                <div  className="sub-footer-3">
                       <div className="footer-name -community">
                            <h3>COMMUNITY</h3>
                       </div>
                       <div className="community">
                       <Link to='/*'> Volunteer</Link>
                       <Link to="/*"> Partner</Link>
                       <Link to="*"> Programs </Link>
                       <Link to="*"> Blog</Link>
                       </div>
                </div>
            </div>

            <div className="footer-2">
                    <p class="footer__copy">&#169;  2024 Blizzcode. All right reserved</p>
            </div>
        </div>
     );
}
 
export default Footer;