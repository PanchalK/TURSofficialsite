import Timeline from "../bodyContent/timeline/Timeline";
import Logo from "../bodyContent/Logo/Logo";
import Intro from "../bodyContent/Intro/Intro";
import Objectives from "../bodyContent/Objectives/Objectives";
import Footer from "../bodyContent/Footer/Footer";
import Gallery from "../bodyContent/Gallery/Gallery";

const Home = () => {
  return (
    <>
      <Logo />
      <Intro />
      <Objectives />
      <Gallery />
      <Timeline/>
      <Footer />
    </>
  );
};

export default Home;
