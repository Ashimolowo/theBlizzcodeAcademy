import Footer from '../footer/Footer';
import Navbar from './../navbar/Navbar';
import './layout.css';


const Layout = ({children}) => {

    return ( 
        <div className='layout'>
             <div>
                 <Navbar />
                 <div>
                    {children}
                 </div>
             </div>
           <div>
             <Footer />
         </div>
        </div>
     );
}
 
export default Layout;