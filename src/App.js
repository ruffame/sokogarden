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
      <div className="App bg-dark">
        {/* navbar  */}
        
        <Navbar/> <br />
        <h1 className="text-success"style={{ fontFamily: "'Grechen Fuemen', cursive" }}> <b>WELCOME TO GAMERS WORLD</b></h1>

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
        <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
