import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import Services from '../../components/Services/Services';
import Projects from '../../components/Projects/Projects';
import AboutUs from '../../components/AboutUs/AboutUs';


const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <AboutUs/>
      <Services/>
      <Projects/>
      
    </div>
  );
};

export default Home;
