import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Signup from './components/Signup';
import Getproducts from './components/Getproducts';
import Addproduct from './components/Addproduct';
import Mpesapayment from './components/Mpesapayment';
import Signin from './components/Signin';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Videos from './components/Videos';

function App() {
  return (
      <BrowserRouter>
      <div className="App " style={{
  backgroundColor: "#0D0D0D",
  color: "#00E5FF"
}}>
        {/* navbar  */}
        
        <Navbar/> <br />
        <h1 className=""style={{ fontFamily: "'Orbitron', sans-serif",color:"#00E5FF",textShadow: "0 0 8px #00E5FF" }}> <b>WELCOME TO GAMERS WORLD</b></h1>

        <header className="bg-secondary">
          

        </header> <br />
        {/* navigations  */}
        
        {/* routes  */}
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/' element={<Getproducts/>} />
          <Route path='/Addproduct' element={<Addproduct/>} />
          <Route path='/mpesa' element={<Mpesapayment/>} />
          <Route path='/videos' element={<Videos/>} />
          
        </Routes>  <br />
        {/* footer  */}
        
    </div>
    </BrowserRouter>
  );
}

export default App;
