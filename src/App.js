import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Page/Shop';
import Shopcategory from './Page/Shopcategory';
import Loginsingup from './Page/Loginsingup';
import Cart from './Page/Cart';
import Product from './Page/Product';
import men_banner from './Component/Assets/banner_mens.png'
import women_banner from './Component/Assets/banner_women.png'
import kids from './Component/Assets/banner_kids.png'
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <Router>
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/Men' element={<Shopcategory banner={men_banner} category="men"/>}/>
      <Route path='/Women' element={<Shopcategory banner={women_banner} category="women"/>}/>
      <Route path='/Kid' element={<Shopcategory banner={kids} category="kid"/>}/>
      <Route  path='/Login' element={<Loginsingup/>}/>
      <Route  path='/Cart' element={<Cart/>}/>
      <Route path='/Product' element={<Product/>}>
        <Route path=':productId' element={<Product/>} />
      </Route>
    </Routes>
    </div>
    <Footer/>
    </Router>
  );
}
export default App;
