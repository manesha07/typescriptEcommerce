import "./App.css";
import { Home } from "./Component/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import DetailProduct from "./Component/DetailProduct";
import DetailUser from "./Component/DetailUser";
import Dashboard from "./Admin/Dashboard";
import AddProduct from "./Admin/AddProduct";
import EditProduct from "./Admin/EditProduct";
import EditUser from "./Admin/EditUsers";
import { Navbar } from "./Component/Navbar";
import Cart from "./Component/Cart";
import UserLogin from "./Component/userLogin";
import UserRegister from "./Component/userRegister";
import Products from "./Component/Products";
import { Footer } from "./Component/Footer";
import CheckoutForm from "./Component/Checkout";

import * as Sentry from "@sentry/react";

const App = () => {
  return (
    <div className="container max-w-[1400px] mx-auto">
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/register" element={<Register />} />
        <Route  path="/userLogin" element={<UserLogin />} />
        <Route  path="/userRegister" element={<UserRegister />} />
        <Route  path="/products" element={<Products />} />
        <Route  path="/products/:id" element={<DetailProduct />} />
        <Route  path="/usersdetail/:id" element={<DetailUser/>} />
        <Route  path="/dashboard" element={<Dashboard />} />
        <Route  path="/addproduct" element={<AddProduct />} />
        <Route  path="/products/edit/:id" element={<EditProduct />} />
        <Route  path="/users/edit/:id" element={<EditUser />} />
        <Route  path="/cart" element={<Cart />} />
        <Route  path="/checkout" element={<CheckoutForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

// function App() {
//   return <>
//   <p>hii</p>
//   <Navbar/>
//   </>
// }

export default Sentry.withProfiler(App);
