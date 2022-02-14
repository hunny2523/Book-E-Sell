import Header from './Components/HeaderComponent';
import Login from './Components/loginComponent';
import Footer from './Components/FooterComponent';
import Register from './Components/RegisterComponent';
import Product from './Components/ProductComponent';
import Edit from './Components/EditProductComponent';
import ProductList from './Components/ProductListingFinal';
import Cart from './Components/CartComponent';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <Product/> */}
      {/* <Edit/> */}
      <ProductList/>
      {/* <Cart/> */}
      <Footer/>
    </div>
  );
}

export default App;
