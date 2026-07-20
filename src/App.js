import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Signup from './components/Signup';
import Getproducts from './components/Getproducts';
import Addproduct from './components/Addproduct';
import Mpesapayment from './components/Mpesapayment';
import Signin from './components/Signin';

function App() {
  return (
      <BrowserRouter>
      <div className="App">
        <header className="bg-danger">
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
          <Route path='/Addproducts' element={<Addproduct/>} />
          <Route path='/mpesa' element={<Mpesapayment/>} />
          
          
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
