import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layouts/footer';
import Header from './layouts/header';
import AddFlower from './pages/add';
import Detail from './pages/detail';
import Home from './pages/home';
import Wishlist from './pages/wishlist';

function App() {
  const [wishlist, setWishlist] = useState([])
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home wishlist={wishlist} setWishlist={setWishlist} />}/>
        <Route path="/add" element={<AddFlower/>}/>
        <Route path="/detail/:_id" element={<Detail/>}/>
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} setWishlist={setWishlist}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
