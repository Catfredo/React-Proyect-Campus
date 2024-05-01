import  Navbar  from './components/navbar.jsx';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home.jsx';
import Component2 from "./components/Component2.jsx";
import Component3 from "./components/Component3.jsx";
import Error from "./components/Error.jsx";


function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/component2" element={<Component2 />} />
          <Route path="/component3" element={<Component3 />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App
