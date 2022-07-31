import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import userActions from './redux/actions/userActions';

import LoginSignUp from './component/login/LoginSignUp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EditarProduct from './component/admin/EditarProduct';
import ScrollToTop from 'react-scroll-to-top';
import Cart from './component/cart/Cart';
import Header from './component/home/Header';
import Footer from './Footer';
import About from './component/about/About';
import Admin from './component/admin/Admin';
import Contact from './component/contact/Contact';
import Home from './component/home/Home';
import Products from './component/Products/Products';
import './App.css';
import ProductDetails from './component/Products/ProductDetails';
import Politicas from './component/politicas/Politicas';



function App() {

  const dispatch = useDispatch();
  let carrito = useSelector(store => store.productReducer.carrito)

  useEffect(() => {

    localStorage.setItem('carrito', JSON.stringify(carrito))



  }, [carrito]);

  useEffect(() => {

    if (localStorage.getItem('token') !== null) {
      const token = localStorage.getItem('token');
      dispatch(userActions.verificarToken(token))
      
    }

// eslint-disable-next-line
  },[])




  let user = useSelector(store => store.userReducer.user)
  console.log(user)

  let message = useSelector(store => store.userReducer.snackbar)

  if (message.view) {

    message.success ? toast.success(message.message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
      :

      toast.warn(message.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })


    if (Array.isArray(message.message)) {
      message.message.map((text) => { toast['error'](text.message) })
    }

    dispatch({ type: 'MESSAGE', payload: { view: false, message: "", success: false } })
  }


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {user && user.role == "admin" && <Route path="/admin" element={<Admin />} />}
        <Route path="/cart" element={<Cart props={carrito} />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<EditarProduct />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/politicas" element={<Politicas />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <ScrollToTop style={{ backgroundColor: '#5e5e5e', opacity: '60%' }}
        smooth
        viewBox="0 0 24 24"
        component={<ArrowUpwardIcon />}
      />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />


    </>

  );
}

export default App;


