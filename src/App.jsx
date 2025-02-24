// import WebGiViewer from "./components/WebGiViewer";
import Driver from "./layout/Driver";
import Header from "./layout/Header";
import Hero from "./layout/Hero";
import Speed from "./layout/Speed";

const App = () => {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <Speed />
      <Driver />
      {/* <WebGiViewer /> */}
    </div>
  );
};

export default App;
