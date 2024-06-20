import './App.css';
import Home from './Home';
import Navbar from './Navbar';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Electronics from './Electonics';
import Jewelery from './Jewelery';
import Men from './Men';
import Women from './Women';




function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='electronics' element={<Electronics></Electronics>}></Route>
      <Route path='jewelery' element={<Jewelery></Jewelery>}></Route>
      <Route path='men' element={<Men></Men>}></Route>
      <Route path='women' element={<Women></Women>}></Route> 
    </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
