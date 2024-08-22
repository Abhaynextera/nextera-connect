import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Services from './components/service/Services';
import Usp from './components/usp/Usp';
import About from './components/about/About';
import Performance from './components/work/Performance';
import Review from './components/review/Review';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <About />
      <Services />
      <Usp />
      <Performance />
      <Review />
      <Footer />
    </>
  );
}

export default App;
