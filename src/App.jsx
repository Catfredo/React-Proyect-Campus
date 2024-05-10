import  Navbar  from './components/navbar.jsx';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home.jsx';
import Rover from "./components/Rover.jsx";
import Exoplanets from "./components/Exoplanets.jsx";
import Error from "./components/Error.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rover" element={<Rover />} />
          <Route path="/exoplanets" element={<Exoplanets />} />
          <Route path="*" element={<Error />} />
        </Routes>
      <Footer />

    </>
  );
}

export default App
