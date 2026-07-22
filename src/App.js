import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Signup from './components/Signup';
import Getproducts from './components/Getproducts';
import Addproduct from './components/Addproduct';
import Mpesapayment from './components/Mpesapayment';
import Signin from './components/Signin';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
      <BrowserRouter>
      <div className="App">
        {/* navbar  */}
        <Navbar/>

        <header className="bg-info">
          <h1>Welcome to Sokogarden</h1>

        </header>
        {/* navigations  */}
        <nav>
          <Link to="/signup" className='btn btn-outline-info'>Signup</Link>
          <Link to="/signin" className='btn btn-outline-info'>Signin</Link>
          <Link to="/Addproducts" className='btn btn-outline-info'>Addproduct</Link>
          <Link to="/" className='btn btn-outline-info'>Getproducts</Link>
         
        </nav>
        {/* routes  */}
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/' element={<Getproducts/>} />
          <Route path='/Addproduct' element={<Addproduct/>} />
          <Route path='/mpesa' element={<Mpesapayment/>} />
          
          
        </Routes>  <br />
        {/* footer  */}
        <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
