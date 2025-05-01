import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import Services from '../../components/Services/Services';
import Projects from '../../components/Projects/Projects';


const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Services/>
      <Projects/>
      
    </div>
  );
};

export default Home;
