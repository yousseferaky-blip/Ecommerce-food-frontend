import React from 'react';
import { Routes ,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import CreateProduct from './pages/CreateProduct';
import Product from './components/Product';
import Cart from './pages/Cart';

function App() {
  return (
    <>
    <Header />
    <div className='absolute top-16 px-2 md:px-4 h-full w-full'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/create" element={<CreateProduct />}/>
        <Route path="/menu/:id" element={<Product />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      </div>
    </>
  );
}

export default App;