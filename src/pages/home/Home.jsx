import Layout from './../../components/layout/Layout';
import HitSection from './../../components/hit-section/HitSection';
import Partners from './../../components/partners/Partners';
import BeginLearning from './../../components/beginLearning/BeginLearning';
import LearningFace from '../../components/learningFace/LearningFace';
import OurCourses from '../../components/ourCourses/OurCourses';
import Reviews from '../../components/Reviews/Reviews';
import LevelUp from './../../components/levelup/LevelUp';
import Connect from '../../components/connect/Connect';
import Footer from '../../components/footer/Footer';


const HomePage = () => {

    return ( 
        <Layout>
            <HitSection />
            <LearningFace />
            <Partners />
            <BeginLearning />
            <OurCourses />
             <Reviews />
             <LevelUp />
             <Connect />
        </Layout>
     );
}
 
export default HomePage;