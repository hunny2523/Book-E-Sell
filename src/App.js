import Header from './Components/HeaderComponent';
import Login from './Components/loginComponent';
import Footer from './Components/FooterComponent';
import Register from './Components/RegisterComponent';
import Product from './Components/ProductComponent';
import Edit from './Components/EditProductComponent';
import ProductList from './Components/ProductListingFinal';
import Cart from './Components/CartComponent';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path="/"  element={<Login />}></Route>
          <Route path="/register" element={<Register />}> </Route>
          <Route path="/edit"  element={ <Edit/>}> </Route>
          <Route path="/cart" element={ <Cart/>}> </Route>
          <Route path="/Product" element={ <Product/>}></Route>
          <Route path="/productlist" element={ <ProductList/>}></Route>
        </Routes>
      </Router>
      <Footer/>

    </div>
  );
}

export default App;
