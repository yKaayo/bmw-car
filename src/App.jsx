import Model3D from "./components/Model3D";
import Driver from "./layout/Driver";
import Header from "./layout/Header";
import Hero from "./layout/Hero";
import LastSection from "./layout/LastSection";
import Speed from "./layout/Speed";

const App = () => {
  return (
    <>
      <Model3D />
      <Header />
      <Hero />
      <Speed />
      <Driver />
      <LastSection />
    </>
  );
};

export default App;
