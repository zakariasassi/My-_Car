import react from 'react';   
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Fixcar  from './components/fixcar/fixcar';
import Pickcar  from './components/pickcar/pickcar';
import Navbar from './navbar/nsv' 

function App() {
  return (
    <>

    <Navbar />

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pickcar />} />
          <Route path="/fixcar" element={<Fixcar />} />

        </Routes>
     </BrowserRouter> 

    </>
  );
}

export default App;
