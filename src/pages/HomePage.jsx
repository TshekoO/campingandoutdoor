import '../App.css'
import HeroSection from '../HeroSection/HeroSection'
import About from '../About/About'
import Shop from '../Shop/Shop';
import Footer from '../Footer/Footer';

function HomePage() {
    return(
         
        <div>
        <HeroSection/>
        <About/>
        <Shop/>
        <Footer/>
        </div>
    );
}
export default HomePage;