import './App.css'
import {useSelector} from "react-redux";

import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Balance from "./components/Balance";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";
import Footer from "./components/Footer";

function App() {

  // const basket  = useSelector((state) => state.basket.basket);

  return (
    <div className="App">

      <NavBar/>

      <div className="AppContent">
        <Header/>
        <Balance/>
        <ProductList/>
        <Basket />

      </div>
      <Footer />
    </div>
  )
}

export default App