import Timeline from "../bodyContent/timeline/Timeline";
import Logo from "../bodyContent/Logo/Logo";
import AboutUs from "../bodyContent/About/AboutUs";
import Objectives from "../bodyContent/Objectives/Objectives";
import Footer from "../bodyContent/Footer/Footer";
import Gallery from "../bodyContent/Gallery/Gallery";

const Home = () => {
  return (
    <>
      <Logo />
      <AboutUs />
      <Objectives />
      <Gallery />
      <Timeline/>
      <Footer />
    </>
  );
};

export default Home;
