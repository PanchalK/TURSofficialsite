import Timeline from "../bodyContent/timeline/Timeline";
import Logo from "../bodyContent/Logo/Logo";
import Intro from "../bodyContent/Intro/Intro";
import Objectives from "../bodyContent/Objectives/Objectives";
import Footer from "../bodyContent/Footer/Footer";

const Home = () => {
  return (
    <>
      <Logo/>
      <Intro />
      <Objectives />
      <Timeline/>
      <Footer />
    </>
  );
};

export default Home;
