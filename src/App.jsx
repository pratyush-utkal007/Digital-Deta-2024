import Header from "./Layout/Header";
import About from "./Pages/About";
import Academy from "./Pages/Academy";
import AccordionPage from "./Pages/AccordionPage";
import Founder from "./Pages/Founder";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <>
      <Header />
      <Founder />
      <Welcome />
      <Academy />
      <About />
      <AccordionPage />
    </>
  );
}

export default App;
